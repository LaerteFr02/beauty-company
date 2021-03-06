import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Formulario } from './formulario.model';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class FormularioService {

  baseUrl = "http://localhost:4000/clients"

  constructor(private http: HttpClient, private snackBar: MatSnackBar) { }

  showMessage(msg:string): void {
    this.snackBar.open(msg,'', {
      duration: 3000,
      horizontalPosition: "right",
      verticalPosition: "top"
    })
  }

  create(clients: Formulario): Observable<Formulario>{
    return this.http.post<Formulario>(this.baseUrl, clients);
  }

  read(): Observable<Formulario[]>{
    return this.http.get<Formulario[]>(this.baseUrl);
  }
}
