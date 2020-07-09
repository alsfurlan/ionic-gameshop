import { Injectable } from '@angular/core';
import { Jogo } from '../models/jogo';

@Injectable({
  providedIn: 'root'
})
export class JogoService {

  private jogos: Jogo[];

  constructor() {
    this.jogos = [
      {
        id: 1,
        nome: 'Battlefield',
        genero: 'FPS',
        lancamento: '2000-02-15',
        preco: 125.00,
        logo: 'https://img.utdstc.com/icons/battlefield-4-wallpaper.png:255'
      },
      {
        id: 2,
        nome: 'Call Of Duty',
        genero: 'FPS',
        lancamento: '2000-02-16',
        preco: 175.50,
        logo: 'https://img.icons8.com/all/500/call-of-duty-modern-warfare.png'
      },
      {
        id: 3,
        nome: 'Counter-Strike GO',
        genero: 'FPS',
        lancamento: '2000-02-17',
        preco: 19.90,
        logo: 'http://logos-download.com/wp-content/uploads/2016/04/CS_logo_logotype_emblem_CS_GO.png'
      }
    ]
  };

  getJogos() {
    return [...this.jogos];
  }

  excluir(jogo: Jogo) {
    this.jogos = this.jogos.filter(j => j.id !== jogo.id);
  }

  salvar(jogo: Jogo) {
    if(jogo.id) {
      this.atualizar(jogo);
    } else {
      this.adicionar(jogo);
    }
  }

  private adicionar(jogo: Jogo) {
    const random = Math.random() * 1000;
    jogo.id = parseInt(random.toString());
    this.jogos.push(jogo);
  }

  private atualizar(jogo: Jogo) {
    const jogoEncontrado = this.jogos.find(j => j.id === jogo.id);
    if (jogoEncontrado) {
      Object.assign(jogoEncontrado, jogo);
    }
  }

  getJogo(id: number) {
    return {...this.jogos.find(j => j.id === id)};
  }
}
