import { Component, OnInit } from '@angular/core';
import { Servico } from '../models/servico.model';

@Component({
  selector: 'app-servico',
  templateUrl: './servico.component.html',
  styleUrls: ['./servico.component.css']
})
export class ServicoComponent implements OnInit {

  servicos: Servico[] = [
    {
      id: 1,
      nome: "Manicure",
      imgPath: "../../assets/images/manicure.jpeg"
    },
    {
      id: 2,
      nome: "Alisamento",
      imgPath: "../../assets/images/alisamento.jpeg"
    },
    {
      id: 3,
      nome: "Corte de cabelo",
      imgPath: "../../assets/images/corte.jpeg"
    },
    {
      id: 4,
      nome: "Maquiagem",
      imgPath: "../../assets/images/maquiagem.jpeg"
    },
    {
      id: 5,
      nome: "Depilação",
      imgPath: "../../assets/images/depilacao.jpeg"
    },
    {
      id: 6,
      nome: "Barbearia",
      imgPath: "../../assets/images/barba.jpeg"
    },
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
