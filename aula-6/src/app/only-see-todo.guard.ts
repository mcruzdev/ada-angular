import { CanActivateFn } from "@angular/router";
import { SignInService } from "./sign-in/sign-in.service";
import { inject } from "@angular/core";
import { map } from "rxjs";

export const onlySeeTodoGuard: CanActivateFn = (route, state) => {
  const service = inject(SignInService);

  

  return service.hasPermission("ONLY_SEE_TODO").pipe(
    map((response: any) => {
      if (!response.hasPermission) {
        console.log("voce nao tem permissao para acessar");
      }
      return response.hasPermission;
    })
  );
};
