import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { JogoListPage } from './jogo-list.page';

const routes: Routes = [
  {
    path: '',
    component: JogoListPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class JogoListPageRoutingModule {}
