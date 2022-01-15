import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from '../guards/auth.guard';
import { ProductorGuard } from '../guards/productor.guard';
import { HomeComponent } from './home/home.component';
import { PageComponent } from './page.component';
import { TopComponent } from './top/top.component';
import { VinosComponent } from './vinos/vinos.component';


const routes: Routes = [
  {
    path: '',
    component: PageComponent,
    // canActivate: [AuthGuard]
  },
  {
    path: 'home',
    component: HomeComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'top',
    component: TopComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'vinos',
    loadChildren: () => import('./vinos/vinos.module').then(m => m.VinosModule),
    canActivate: [ProductorGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule { }
