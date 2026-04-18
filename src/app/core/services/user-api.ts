import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { IUserTokenSucessAuth } from '../../shared/models/user-token-sucess-auth';

@Injectable({
  providedIn: 'root',
})
export class UserApi {
  private readonly _httpClient = inject(HttpClient);

  validateToken() {
    return this._httpClient.get<IUserTokenSucessAuth>('http://localhost:3000/users/validate-token');
  }

  login() {}

  register() {}
}
