import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'jogo-list',
    pathMatch: 'full'
  },
  {
    path: 'jogo-list',
    loadChildren: () => import('./pages/jogo-list/jogo-list.module').then( m => m.JogoListPageModule)
  },
  {
    path: 'jogo-cad',
    loadChildren: () => import('./pages/jogo-cad/jogo-cad.module').then( m => m.JogoCadPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
