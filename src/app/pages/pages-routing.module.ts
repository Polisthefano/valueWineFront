import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PageComponent } from './page.component';
import { TopComponent } from './top/top.component';


const routes: Routes = [
  {
    path: '',
    component: PageComponent
  },
  {
    path: 'top',
    component: TopComponent
  },
  {
    path: 'home',
    component: HomeComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule { }
