import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VinosComponent } from './vinos.component';
import { IonicModule } from '@ionic/angular';
import { VinosRoutingModule } from './vinos-routing.module';
import { AgregarEditarVinoComponent } from './AgregarEditarVino/AgregarEditarVino.component';
import { ReactiveFormsModule } from '@angular/forms';




@NgModule({
  declarations: [VinosComponent, AgregarEditarVinoComponent],
  imports: [
    CommonModule,
    IonicModule,
    ReactiveFormsModule,
    VinosRoutingModule,
  ]
})
export class VinosModule { }
