import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AgregarEditarVinoComponent } from './AgregarEditarVino/AgregarEditarVino.component';
import { IonicModule } from '@ionic/angular';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [AgregarEditarVinoComponent],
  imports: [
    CommonModule,
    IonicModule,
    ReactiveFormsModule
  ],
  exports: [AgregarEditarVinoComponent]
})
export class ComponentesModule { }
