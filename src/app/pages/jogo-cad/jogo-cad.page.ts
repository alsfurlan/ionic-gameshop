import { Component, OnInit } from '@angular/core';
import { Jogo } from 'src/app/models/jogo';
import { JogoService } from 'src/app/services/jogo.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-jogo-cad',
  templateUrl: './jogo-cad.page.html',
  styleUrls: ['./jogo-cad.page.scss'],
})
export class JogoCadPage implements OnInit {

  jogo: Jogo;

  constructor(
    private jogoService: JogoService,
    private routerService: Router,
    private activatedRoute: ActivatedRoute
  ) {
    this.jogo = {
      nome: '',
      preco: 0,
      lancamento: '',
      genero: '',
      logo: ''
    };
    const id = parseInt(this.activatedRoute.snapshot.params['id']);
    if (id) {
      this.jogo = this.jogoService.getJogo(id);
    } 
  }

  ngOnInit() {
  }

  salvar() {
    this.jogoService.salvar(this.jogo);
    this.routerService.navigate(['/jogo-list']);
  }
}
