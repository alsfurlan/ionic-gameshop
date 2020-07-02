import { Component, OnInit } from '@angular/core';
import { Jogo } from 'src/app/models/jogo';

@Component({
  selector: 'app-jogo-list',
  templateUrl: './jogo-list.page.html',
  styleUrls: ['./jogo-list.page.scss'],
})
export class JogoListPage implements OnInit {

  jogos: Jogo[];

  constructor() {
    this.jogos = [
      {
        id: 1,
        nome: 'Battlefield',
        genero: 'FPS',
        lancamento: new Date(2000, 11, 15),
        preco: 125.00,
        logo: 'https://img.utdstc.com/icons/battlefield-4-wallpaper.png:255'
      },
      {
        id: 2,
        nome: 'Call Of Duty',
        genero: 'FPS',
        lancamento: new Date(2020, 11, 15),
        preco: 175.50,
        logo: 'https://img.icons8.com/all/500/call-of-duty-modern-warfare.png'
      },
      {
        id: 3,
        nome: 'Counter-Strike GO',
        genero: 'FPS',
        lancamento: new Date(2015, 2, 15),
        preco: 19.90,
        logo: 'http://logos-download.com/wp-content/uploads/2016/04/CS_logo_logotype_emblem_CS_GO.png'
      }
    ];
  }

  ngOnInit() {
  }

  excluir(jogo: Jogo) {
    this.jogos = this.jogos.filter(j => j.id !== jogo.id);
  }

}
