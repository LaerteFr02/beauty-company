import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
//import { BsDatepickerConfig } from 'ngx-bootstrap/datepicker';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {
  
  
  @Input() agendamentoForm!: FormGroup;
  //dateConfig: BsDatepickerConfig = new BsDatepickerConfig();
  
  constructor() { }

  ngOnInit(): void {this.agendamentoForm = new FormGroup({
    name: new FormControl(),
    service: new FormControl(),
    date: new FormControl(),
    time: new FormControl(),
    payment: new FormControl()
  });
  //this.dateConfig.containerClass = 'theme-dark-blue';
  }

  createAgendamento() {
    console.log(this.agendamentoForm.value);
    this.agendamentoForm.reset();
  }
}
