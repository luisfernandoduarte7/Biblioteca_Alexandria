import { Component, OnInit } from '@angular/core';
import { LivrosService } from '../model/services/livros.service';
import { Ilivros } from '../model/services/ilivros';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-cards',
  standalone: true,
  imports: [CommonModule],
  providers:[LivrosService],
  templateUrl: './cards.component.html',
  styleUrl: './cards.component.scss'
})
export class CardsComponent implements OnInit {
  constructor(private livrosServices:LivrosService){}
  livros: Ilivros[] = [];

  ngOnInit(): void {
      this.livros = this.livrosServices.getLivros();
  }

}
