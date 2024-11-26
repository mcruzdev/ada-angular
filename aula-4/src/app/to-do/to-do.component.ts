import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup, ReactiveFormsModule } from "@angular/forms";
import { ToDoService } from "./to-do.service";

@Component({
  selector: "app-to-do",
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: "./to-do.component.html",
  styleUrl: "./to-do.component.scss",
})
export class ToDoComponent implements OnInit {
  constructor(private readonly toDoService: ToDoService) {}

  tarefaForm: FormGroup = new FormGroup({
    title: new FormControl(""),
  });

  tarefas: Tarefa[] = [];

  ngOnInit(): void {
    this.toDoService.buscarTarefas().subscribe((response: Tarefa[]) => {
      this.tarefas = response;
    });
  }

  toggleTarefa(id: string) {
    // const index = this.tarefas.findIndex((elemento) => elemento.id == id);

    const tarefa = this.tarefas.find((elemento) => elemento.id == id);

    if (!tarefa) {
      return;
    }

    this.toDoService
      .toggleTarefa(tarefa.id, !tarefa.completed)
      .subscribe((response) => {
        // this.tarefas[index] = response as Tarefa;
        tarefa.completed = !tarefa.completed;
      });
  }

  onSubmit() {
    this.toDoService
      .criarTarefa(this.tarefaForm.value)
      .subscribe((response) => {
        this.tarefas.push(response as Tarefa);
      });
  }
}

export interface Tarefa {
  id: string;
  title: string;
  completed: boolean;
}
