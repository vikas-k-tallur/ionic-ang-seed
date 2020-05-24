import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SlidesComponent } from './slides/slides.component';
import { IonicModule } from '@ionic/angular';


const components=[SlidesComponent]

@NgModule({
  declarations: components,
  imports: [
    CommonModule,
    IonicModule
  ],
  exports:components
})
export class ComponentsModule { }
