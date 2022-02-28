import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BoasVindasPage } from './boas-vindas.page';

const routes: Routes = [
  {
    path: '',
    component: BoasVindasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BoasVindasPageRoutingModule {}
