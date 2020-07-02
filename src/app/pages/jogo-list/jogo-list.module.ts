import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { JogoListPageRoutingModule } from './jogo-list-routing.module';

import { JogoListPage } from './jogo-list.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    JogoListPageRoutingModule
  ],
  declarations: [JogoListPage]
})
export class JogoListPageModule {}
