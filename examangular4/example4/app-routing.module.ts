import {Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NgforComponent} from './ngfor/ngfor.component';

const routes: Routes = [
  {path:'app-ngfor',component:NgforComponent}
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }