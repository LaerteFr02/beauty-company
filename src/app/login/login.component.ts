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
    if (this.requestLogin.usuario == "admin" && this.requestLogin.senha == "admin")
      {this.router.navigate(['/tabela']);
   } else if (this.requestLogin.usuario == "cliente" && this.requestLogin.senha == "cliente")
      {this.router.navigate(['/formulario']);
   } else
      alert("Usuário ou senha inválidos! Verifique seus dados.");
  }

}
