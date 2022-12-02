import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListContratComponent } from './list-contrat/list-contrat.component';
import { ContratRoutingModule } from './contrat-routing.module';
import { ContratComponent } from './contrat.component';
import { AddContratComponent } from './add-contrat/add-contrat.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ContratComponent,
    AddContratComponent,
    ListContratComponent

  ],
  imports: [
    CommonModule,
    ContratRoutingModule,
    FormsModule
  ]
})
export class ContratModule { }
