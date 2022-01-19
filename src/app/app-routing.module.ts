import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RwiSearchComponent } from './rwi-search/rwi-search.component'

const routes: Routes = [
  {path: "" , component: RwiSearchComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
