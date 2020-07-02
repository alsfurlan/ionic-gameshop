import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'folder/Inbox',
    pathMatch: 'full'
  },
  {
    path: 'folder/:id',
    loadChildren: () => import('./folder/folder.module').then( m => m.FolderPageModule)
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
