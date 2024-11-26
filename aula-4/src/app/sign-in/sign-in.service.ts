import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { ToastrService } from "ngx-toastr";

import { catchError, map, of, tap } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class SignInService {
  constructor(
    private readonly http: HttpClient,
    private readonly toastr: ToastrService
  ) {}

  signIn({ email, password }: { email: string; password: string }) {
    return this.http
      .post<SignInResponse>("http://localhost:3000/sign-in", {
        email: email,
        password,
      })
      .pipe(
        // handlers
        tap((value) => console.log("tap()", value)), // 1.

        map((value) => {
          console.log("map()", value); // 2.
          return value;
        }),

        catchError((err) => {
          //3
          if (err.status === 0) {
            this.toastr.error("Connection failed");
          }
          return of(err);
        })
      );
  }
}

interface SignInResponse {
  token: string;
}

const fns = [
  function (v: string) {
    console.log(v, "first function");
  },
  function (v: string) {
    console.log(v, "second function");
  },
  function (v: string) {
    console.log(v, "third function");
  },
];

// high-order functions

function pipe(pipes: Function[]) {
  const value = "{}";
  pipes.forEach((c) => c(value));
}
