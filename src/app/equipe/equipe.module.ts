import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EquipeRoutingModule } from './equipe-routing.module';
import { FormsModule } from '@angular/forms';
import { EquipeComponent } from './equipe.component';
import { ListEquipesComponent } from './list-equipes/list-equipes.component';
import { AddEquipeComponent } from './add-equipe/add-equipe.component';


@NgModule({
  declarations: [
    EquipeComponent,
    ListEquipesComponent,
    AddEquipeComponent
  ],
  imports: [
    CommonModule,
    EquipeRoutingModule,
    FormsModule
  ]
})
export class EquipeModule { }
