import { Routes } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { LoginComponent } from "./login/login.component";
import { ListEventsComponent } from "./home/list-events/list-events.component";
import { CreateEventComponent } from "./home/create-event/create-event.component";
import { NotFoundComponent } from "./not-found/not-found.component";
import { EventDetailsComponent } from "./home/event-details/event-details.component";

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
    path: "**",
    component: NotFoundComponent,
  },
];
