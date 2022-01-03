import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { PagesRoutingModule } from './pages-routing.module';
import { HomeComponent } from './home/home.component';
import { TopComponent } from './top/top.component';



@NgModule({
  declarations: [HomeComponent, TopComponent],
  imports: [
    CommonModule,
    IonicModule,
    PagesRoutingModule
  ]
})
export class PagesModule { }
