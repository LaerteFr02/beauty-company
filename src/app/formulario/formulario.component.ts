import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { FormularioService } from './formulario.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {



  @Input() agendamentoForm!: FormGroup;


  constructor(private formularioService: FormularioService, private router: Router) { }

  ngOnInit(): void {this.agendamentoForm = new FormGroup({
    name: new FormControl(),
    service: new FormControl(),
    date: new FormControl(),
    time: new FormControl(),
    payment: new FormControl()
  });

  }

  createAgendamento() {
    this.formularioService.create(this.agendamentoForm.value).subscribe(() => {
      this.formularioService.showMessage("Agendamento realizado");
      console.log(this.agendamentoForm.value);
      this.agendamentoForm.reset();
      this.router.navigate(['/nav']);
    });
  }

  cancel(): void{
    this.router.navigate(['/login']);
  }
}
