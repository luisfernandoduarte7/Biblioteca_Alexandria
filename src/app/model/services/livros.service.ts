import { Injectable } from '@angular/core';
import { Ilivros } from './ilivros';

@Injectable({
  providedIn: 'root'
})
export class LivrosService {

  private livros: Ilivros[] = [
   { id: 1, name: 'Janio', price: 100.0, autor: 'Paulo Markun',image:'../quadros.png'},
   { id: 2, name: 'Django', price: 72.0, autor: 'Tiago Silva',image:'../django.png'},
   { id: 3, name: 'Hurricane',price: 88.0, autor: 'Bob Dylan',image:'../hurricane.png'},
   { id: 4, name: 'Ainda estou aqui', price: 60.0, autor: 'Marcelo Rubens Paiva',image:'../ainda.png'},
   { id: 5, name: 'Aprendiz do Vilão', price: 71.0, autor:'Hannah Nicole Maehrer',image:'../aprendiz.png'},
   { id: 6, name: 'Verity', price: 75.0, autor: ' Colleen Hoover',image:'../verity.png'},
   { id: 7, name: 'Beleza Oculta ', price: 7.0, autor: 'Allan Loeb',image:'../beleza.png'},
   { id: 8, name: 'Napoleão', price: 80.0, autor: ' Alexandre Dumas',image:'../napoleao.png'},
   { id: 9, name: 'Vargas', price: 79.0, autor: 'Lira Neto',image:'../vargas.png'},
   { id: 10, name: 'JK', price: 74.0, autor: 'Affonso Heliodoro',image:'../jk.png'},
  ];
  getLivros(): Ilivros[] {
    return this.livros;
}
}

