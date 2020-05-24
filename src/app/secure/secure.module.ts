import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SecurePageRoutingModule } from './secure-routing.module';

import { SecurePage } from './secure.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SecurePageRoutingModule
  ],
  declarations: [SecurePage]
})
export class SecurePageModule {}
