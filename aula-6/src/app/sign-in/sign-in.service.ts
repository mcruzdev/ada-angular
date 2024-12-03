import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { ToastrService } from "ngx-toastr";

import { decode } from "jsonwebtoken";

import { catchError, map, of, tap } from "rxjs";
import { LocalStorageService } from "../services/local-storage.service";

@Injectable({
  providedIn: "root",
})
export class SignInService {
  constructor(
    private readonly http: HttpClient,
    private readonly toastr: ToastrService,
    private readonly localStorage: LocalStorageService
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

  hasPermission(role: string) {
    const token = this.localStorage.get("token") as string;
    const claims: any = decode(token);
    return claims.roles.includes(role);
    // return this.http.post("http://localhost:3000/sign-in/permissions", {
    //   role,
    //   token,
    // });
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
