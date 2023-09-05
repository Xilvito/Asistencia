import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HeroPage } from './hero.page';

const routes: Routes = [
  {
    path: '',
    component: HeroPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HeroPageRoutingModule {}
