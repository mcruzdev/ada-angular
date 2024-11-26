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
    private readonly localStorage: LocalStorageService,
    private readonly toastr: ToastrService
  ) {}

  criarTarefa({ title }: { title: string }) {
    const token = this.localStorage.get("token");
    return this.httpClient
      .post<Tarefa>(
        "http://localhost:3000/to-do",
        {
          title,
        },
        {
          headers: {
            "x-api-key": token,
          },
        }
      )
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

  buscarTarefas() {
    const token = this.localStorage.get("token");
    return this.httpClient.get<Tarefa[]>("http://localhost:3000/to-do", {
      headers: {
        "x-api-key": token,
      },
    });
  }

  toggleTarefa(id: string, status: boolean) {
    const token = this.localStorage.get("token");
    return this.httpClient.patch(
      `http://localhost:3000/to-do/${id}`,
      {
        status,
      },
      {
        headers: {
          "x-api-key": token,
        },
      }
    );
  }
}



/// api ........ <- service -->> injetar o service pra quem quiser