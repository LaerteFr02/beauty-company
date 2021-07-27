import { Produto } from './../models/produtos.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-produtos',
  templateUrl: './produtos.component.html',
  styleUrls: ['./produtos.component.css']
})
export class ProdutosComponent implements OnInit {

  produtos: Produto[] = [
    {
      id: 1,
      nome: "Moleton masculino Eko",
      preco: 200,
      tipo: "m",
      imgPath: "../../assets/images/product_1.png"
    },
    {
      id: 2,
      nome: "Bolsa Luis Vitao",
      preco: 200,
      tipo: "a",
      imgPath: "../../assets/images/product_2.png"
    },
    {
      id: 3,
      nome: "Moleton femino Lacoste",
      preco: 200,
      tipo: "f",
      imgPath: "../../assets/images/product_3.png"
    },
    {
      id: 4,
      nome: "Bolsa bagagem viagem",
      preco: 200,
      tipo: "a",
      imgPath: "../../assets/images/product_4.png"
    },
    {
      id: 5,
      nome: "Sapato social feminino",
      preco: 200,
      tipo: "f",
      imgPath: "../../assets/images/product_5.png"
    },
    {
      id: 6,
      nome: "Oculos Rayban",
      preco: 200,
      tipo: "m",
      imgPath: "../../assets/images/product_6.png"
    },
    {
      id: 7,
      nome: "Blusa meio amarela",
      preco: 200,
      tipo: "f",
      imgPath: "../../assets/images/product_7.png"
    },
    {
      id: 8,
      nome: "Bolsa de mão",
      preco: 200,
      tipo: "a",
      imgPath: "../../assets/images/product_8.png"
    },
    {
      id: 9,
      nome: "Jaqueta marron",
      preco: 200,
      tipo: "f",
      imgPath: "../../assets/images/product_9.png"
    },
    {
      id: 10,
      nome: "Blusa social masculina",
      preco: 200,
      tipo: "m",
      imgPath: "../../assets/images/product_10.png"
    },
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
