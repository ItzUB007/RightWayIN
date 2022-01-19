import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RwiSearchComponent } from './rwi-search/rwi-search.component'
import { HomeComponent} from './home/home.component';

const routes: Routes = [
  {path: "" , component: HomeComponent },
  {path: "search" , component: RwiSearchComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
