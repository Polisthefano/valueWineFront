import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from 'src/app/guards/auth.guard';
import { ProductorGuard } from 'src/app/guards/productor.guard';
import { AgregarEditarVinoComponent } from 'src/app/pages/vinos/AgregarEditarVino/AgregarEditarVino.component';
import { VinoComponent } from './vino/vino/vino.component';
import { VinosComponent } from './vinos.component';


const routes: Routes = [
  {
    path: '',
    component: VinosComponent,
    canActivate: [ProductorGuard]
  },
  {
    path: 'vino/:id',
    component: VinoComponent,
    canActivate: [ProductorGuard]
  },
  {
    path: 'addWine',
    component: AgregarEditarVinoComponent,
    canActivate: [ProductorGuard]
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VinosRoutingModule { }
