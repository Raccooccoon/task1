import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MainComponent } from './components/main/main.component'
import {  AuthGuardService as AuthGuard } from './services/auth-guard.service';

const routes: Routes = [
  { 
    path: 'main',
    canActivate: [AuthGuard],
    component: MainComponent 
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
