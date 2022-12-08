import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DetailEquipeRoutingModule } from './detail-equipe-routing.module';
import { DetailEquipeComponent } from './detail-equipe.component';
import { ListDetailEquipesComponent } from '../detail-equipe/list-detail-equipes/list-detail-equipes.component';
import { AddDetailEquipeComponent } from './add-detail-equipe/add-detail-equipe.component';
import { FormsModule } from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';


@NgModule({
  declarations: [
    DetailEquipeComponent,
    ListDetailEquipesComponent,
    AddDetailEquipeComponent
  ],
  imports: [
    CommonModule,
    DetailEquipeRoutingModule,
    FormsModule,
    MatFormFieldModule,MatSelectModule
  ]
})
export class DetailEquipeModule { }
