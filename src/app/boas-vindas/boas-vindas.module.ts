import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BoasVindasPageRoutingModule } from './boas-vindas-routing.module';

import { BoasVindasPage } from './boas-vindas.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BoasVindasPageRoutingModule
  ],
  declarations: [BoasVindasPage]
})
export class BoasVindasPageModule {}
