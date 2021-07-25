import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RequestLogin } from '../models/RequestLogin.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  requestLogin: RequestLogin = { usuario: "", senha: "" };

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  doLogin(): void {
    if (this.requestLogin.usuario == "teste" && this.requestLogin.senha == "lets_code")
      this.router.navigate(['/tabela']);
    else
      alert("Usuário ou senha inválidos! Verifique seus dados.");
  }

}
