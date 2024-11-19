import { Routes } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { LoginComponent } from "./login/login.component";
import { ListEventsComponent } from "./home/list-events/list-events.component";
import { CreateEventComponent } from "./home/create-event/create-event.component";
import { NotFoundComponent } from "./not-found/not-found.component";
import { EventDetailsComponent } from "./home/event-details/event-details.component";
import { ControlFlowComponent } from "./control-flow/control-flow.component";
import { NgIfComponent } from "./control-flow/ng-if/ng-if.component";
import { NgForComponent } from "./control-flow/ng-for/ng-for.component";
import { NgSwitchComponent } from "./control-flow/ng-switch/ng-switch.component";

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
        component: CreateEventComponent,
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
    path: "**",
    component: NotFoundComponent,
  },
];
