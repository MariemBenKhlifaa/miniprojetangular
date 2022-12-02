import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailEquipeComponent } from './detail-equipe.component';

const routes: Routes = [{ path: '', component: DetailEquipeComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DetailEquipeRoutingModule { }
