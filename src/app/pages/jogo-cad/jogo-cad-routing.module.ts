import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { JogoCadPage } from './jogo-cad.page';

const routes: Routes = [
  {
    path: '',
    component: JogoCadPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class JogoCadPageRoutingModule {}
