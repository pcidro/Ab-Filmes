import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';

Injectable({
  providedIn: 'root',
});
export class UserApi {
  private readonly _httpClient = inject(HttpClient);

  validateToken() {
    return this._httpClient.get('http://localhost:3000/users/validate-token');
  }

  login() {}

  register() {}
}
