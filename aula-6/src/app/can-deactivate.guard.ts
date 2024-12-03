import { CanDeactivateFn } from "@angular/router";

export const canDeactivateGuard: CanDeactivateFn<unknown> = (
  component: any,
  currentRoute,
  currentState,
  nextState
) => {
  if (component.nomeDaTarefaAlterado) {
    return confirm("Deseja realmente sair?");
  }
  return true;
};
