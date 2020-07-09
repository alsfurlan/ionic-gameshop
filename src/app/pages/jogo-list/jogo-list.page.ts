import { Component, OnInit } from '@angular/core';
import { Jogo } from 'src/app/models/jogo';
import { JogoService } from 'src/app/services/jogo.service';
import { Router } from '@angular/router';
import { IonItemSliding } from '@ionic/angular';

@Component({
  selector: 'app-jogo-list',
  templateUrl: './jogo-list.page.html',
  styleUrls: ['./jogo-list.page.scss'],
})
export class JogoListPage implements OnInit {

  jogos: Jogo[];

  constructor(
    private jogoService: JogoService,
    private routerService: Router,
  ) {
    this.jogos = [];
  }

  ngOnInit() {}

  ionViewWillEnter() {
    this.listar();
  }

  editar(jogo: Jogo, itemSliding: IonItemSliding) {
    this.routerService.navigate(['./jogo-cad', jogo.id]);
    itemSliding.close();
  }

  excluir(jogo: Jogo) {
    this.jogoService.excluir(jogo);
    this.listar();
  }

  listar() {
    this.jogos = this.jogoService.getJogos();
  }
  
}
