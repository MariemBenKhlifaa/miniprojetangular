import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatFormFieldModule} from '@angular/material/form-field';

import { EquipeRoutingModule } from './equipe-routing.module';
import { FormsModule } from '@angular/forms';
import { EquipeComponent } from './equipe.component';
import { ListEquipesComponent } from './list-equipes/list-equipes.component';
import { AddEquipeComponent } from './add-equipe/add-equipe.component';
import {MatSelectModule} from '@angular/material/select';
import { Ng2SearchPipeModule } from 'ng2-search-filter';




@NgModule({
  declarations: [
    EquipeComponent,
    ListEquipesComponent,
    AddEquipeComponent
  ],
  imports: [
    CommonModule,
    EquipeRoutingModule,
    FormsModule,
    MatFormFieldModule,
    MatSelectModule,
    Ng2SearchPipeModule
    
  ]
})
export class EquipeModule { }
