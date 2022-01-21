import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VinosComponent } from './vinos.component';
import { IonicModule } from '@ionic/angular';
import { VinosRoutingModule } from './vinos-routing.module';
import { ComponentesModule } from 'src/app/shared/componentes/componentes.module';




@NgModule({
  declarations: [VinosComponent],
  imports: [
    CommonModule,
    IonicModule,
    VinosRoutingModule,
    ComponentesModule
  ]
})
export class VinosModule { }
