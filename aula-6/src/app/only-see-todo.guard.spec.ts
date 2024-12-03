import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { onlySeeTodoGuard } from './only-see-todo.guard';

describe('onlySeeTodoGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => onlySeeTodoGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
