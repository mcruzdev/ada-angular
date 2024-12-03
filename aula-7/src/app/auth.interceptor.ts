import {
  HttpEvent,
  HttpEventType,
  HttpInterceptorFn,
} from "@angular/common/http";
import { LocalStorageService } from "./services/local-storage.service";
import { inject } from "@angular/core";
import { catchError, Observable, of, tap } from "rxjs";
import { ToastrService } from "ngx-toastr";

export const authInterceptor: HttpInterceptorFn = (req, next) => {
  const localStorageService = inject(LocalStorageService);

  const token = localStorageService.get("token");

  const newRequest = req.clone({
    headers: req.headers.append("Authorization", `Bearer ${token}`),
  });

  return next(newRequest);
};

export const authInterceptorResponse: HttpInterceptorFn = (
  req,
  next
): Observable<HttpEvent<unknown>> => {
  const toastr = inject(ToastrService);

  return next(req).pipe(
    catchError((err) => {
      toastr.error("Error ao se conectar com API");
      return of(err);
    }),
    tap((event) => {
      console.log("event.status", event.type);
      if (event.type === HttpEventType.Response) {
        console.log("status is", event.status);

        if (event.status > 400) {
          toastr.error("Deu ruim em algum lugar");
        }

        if (event.status == 0) {
          toastr.error("Error ao se conectar com o servidor");
        }
      }
    })
  );
};
