import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { LocalStorageService } from "../services/local-storage.service";
import { Tarefa } from "./to-do.component";
import { catchError, of } from "rxjs";
import { ToastrService } from "ngx-toastr";

@Injectable({
  providedIn: "root",
})
export class ToDoService {
  constructor(
    private readonly httpClient: HttpClient,
    private readonly toastr: ToastrService
  ) {}

  criarTarefa({ title }: { title: string }) {
    return this.httpClient
      .post<Tarefa>("http://localhost:3000/to-do", {
        title,
      })
      .pipe(
        catchError((err) => {
          if (err.status == 0) {
            this.toastr.error("Connection failed");
          }

          if (err.status >= 400 && err.status <= 499) {
            this.toastr.error(err.error.message, err.error.title);
          }

          return of(err);
        })
      );
  }

  buscarTarefas(filter: string = "") {
    return this.httpClient
      .get<Tarefa[]>(`http://localhost:3000/to-do?only=${filter}`)
      .pipe(
        catchError((err) => {
          mapHandlers.get(err.statusText)?.call(err);
          return of(err);
        })
      );
  }

  toggleTarefa(id: string, status: boolean) {
    return this.httpClient.patch(`http://localhost:3000/to-do/${id}`, {
      status,
    });
  }
}

const mapHandlers = new Map<string, Function>([["0", () => {}]]);
