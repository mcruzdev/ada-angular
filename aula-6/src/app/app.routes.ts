import { Routes } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { LoginComponent } from "./login/login.component";
import { ListEventsComponent } from "./home/list-events/list-events.component";
import { SimuladorComponent } from "./home/simulador/simulador.component";
import { NotFoundComponent } from "./not-found/not-found.component";
import { EventDetailsComponent } from "./home/event-details/event-details.component";
import { ControlFlowComponent } from "./control-flow/control-flow.component";
import { NgIfComponent } from "./control-flow/ng-if/ng-if.component";
import { NgForComponent } from "./control-flow/ng-for/ng-for.component";
import { NgSwitchComponent } from "./control-flow/ng-switch/ng-switch.component";
import { NotificadorComponent } from "./notificador/notificador.component";
import { ToDoComponent } from "./to-do/to-do.component";
import { onlySeeTodoGuard } from "./only-see-todo.guard";
import { canDeactivateGuard } from "./can-deactivate.guard";

export const routes: Routes = [
  {
    path: "",
    pathMatch: "full",
    redirectTo: "home",
  },
  {
    path: "home",
    component: HomeComponent,
    children: [
      {
        path: "",
        component: ListEventsComponent,
      },
      {
        path: "list-events",
        component: ListEventsComponent,
      },
      {
        path: "create-event",
        component: SimuladorComponent,
      },
      {
        path: "events/:eventId/details",
        component: EventDetailsComponent,
      },
    ],
  },
  {
    path: "login",
    component: LoginComponent,
  },
  {
    path: "control-flow",
    component: ControlFlowComponent,
    children: [
      {
        path: "ng-if",
        component: NgIfComponent,
      },
      {
        path: "ng-for",
        component: NgForComponent,
      },
      {
        path: "ng-switch",
        component: NgSwitchComponent,
      },
    ],
  },
  {
    path: "notificador",
    component: NotificadorComponent,
  },
  {
    path: "todo",
    component: ToDoComponent,
    canActivate: [onlySeeTodoGuard],
    canDeactivate: [canDeactivateGuard],
    canActivateChild: []
  },
  {
    path: "**",
    component: NotFoundComponent,
  },
];
