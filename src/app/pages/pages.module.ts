import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { PagesRoutingModule } from './pages-routing.module';
import { HomeComponent } from './home/home.component';
import { TopComponent } from './top/top.component';
import { SharedModule } from '../shared/shared.module';
import { PageComponent } from './page.component';
import { VinosComponent } from './vinos/vinos.component';




@NgModule({
  declarations: [HomeComponent, PageComponent, TopComponent],
  imports: [
    CommonModule,
    IonicModule,
    PagesRoutingModule,
    SharedModule
  ]
})
export class PagesModule { }
