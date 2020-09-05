import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'base',
    loadChildren: () => import('./domains/base/base.module').then(m => m.BaseModule)
  },
  {
    path: '**',
    redirectTo: 'base'
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
  ],
  exports: [
    RouterModule,
  ]
})
export class AppRoutingModule { }
