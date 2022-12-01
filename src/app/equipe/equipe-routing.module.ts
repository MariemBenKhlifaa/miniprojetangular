import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EquipeComponent } from './equipe.component';
import { ListEquipesComponent } from './list-equipes/list-equipes.component';

const routes: Routes = [{ path: '', component: EquipeComponent, children:[
  { path:'listequipes', component: ListEquipesComponent}]}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EquipeRoutingModule { }
