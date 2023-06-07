import { TestBed } from '@angular/core/testing';

import { UserServiseService as UserServise } from './user.servise.service';

describe('UserServiseService', () => {
  let userService: UserServise;

  beforeEach(() => {
   userService = new UserServise

  });

  it('deve retornar um usuario existente por ID', () => {
    const userId = 2;
    const user = userService.getUserById(userId);

    expect(user).toBeDefined();
    expect(user?.id).toEqual(userId);
  });

  it('deve retornar undefined para outro usuário inexistente po ID', () => {
    const userId = 10;
    const user = userService.getUserById(userId);

    expect(user).toBeUndefined();

  });
});
