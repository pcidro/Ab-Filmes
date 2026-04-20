import { Component, signal } from '@angular/core';
import { email, form, minLength, required, Field } from '@angular/forms/signals';

@Component({
  selector: 'app-login-form',
  imports: [Field],
  templateUrl: './login-form.html',
  styleUrl: './login-form.css',
})
export class LoginForm {
  loginModel = signal({
    email: '',
    password: '',
  });

  loginForm = form(this.loginModel, (fieldpath) => {
    required(fieldpath.email, { message: 'Email é obrigatório' });
    email(fieldpath.email, { message: 'O email está invalido' });
    required(fieldpath.password, { message: 'Senha é obrigatória' });
    minLength(fieldpath.password, 8, { message: 'A senha deve ter no minimo 8 caracteres' });
  });
}
