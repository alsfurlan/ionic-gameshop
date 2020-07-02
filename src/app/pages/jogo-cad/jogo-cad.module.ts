import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { JogoCadPageRoutingModule } from './jogo-cad-routing.module';

import { JogoCadPage } from './jogo-cad.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    JogoCadPageRoutingModule
  ],
  declarations: [JogoCadPage]
})
export class JogoCadPageModule {}
