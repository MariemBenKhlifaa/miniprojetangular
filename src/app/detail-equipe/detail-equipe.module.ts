import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DetailEquipeRoutingModule } from './detail-equipe-routing.module';
import { DetailEquipeComponent } from './detail-equipe.component';
import { ListDetailEquipesComponent } from '../detailEquipe/list-detail-equipes/list-detail-equipes.component';


@NgModule({
  declarations: [
    DetailEquipeComponent,
    ListDetailEquipesComponent
  ],
  imports: [
    CommonModule,
    DetailEquipeRoutingModule
  ]
})
export class DetailEquipeModule { }
