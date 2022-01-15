import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from 'src/app/guards/auth.guard';
import { ProductorGuard } from 'src/app/guards/productor.guard';
import { VinoComponent } from './vino/vino/vino.component';
import { VinosComponent } from './vinos.component';


const routes: Routes = [
  {
    path: '',
    component: VinosComponent
  },
  {
    path: 'vino/:id',
    component: VinoComponent,
    canActivate: [ProductorGuard]
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VinosRoutingModule { }
