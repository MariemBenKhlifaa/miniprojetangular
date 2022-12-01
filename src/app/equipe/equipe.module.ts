import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EquipeRoutingModule } from './equipe-routing.module';
import { EquipeComponent } from './equipe.component';
import { ListEquipesComponent } from './list-equipes/list-equipes.component';


@NgModule({
  declarations: [
    EquipeComponent,
    ListEquipesComponent
  ],
  imports: [
    CommonModule,
    EquipeRoutingModule
  ]
})
export class EquipeModule { }
