import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {PrepareDataComponent} from './prepare-data/prepare-data.component';
import {DataResolver} from './services/data.resolver';


const routes: Routes = [
  { path: '', component: PrepareDataComponent, resolve: {data: DataResolver}}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
