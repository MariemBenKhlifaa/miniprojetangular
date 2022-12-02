import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FooterComponent } from './footer/footer.component';

const routes: Routes = [{ path: 'students', loadChildren: () => import('./students/students.module').then(m => m.StudentsModule)},
{ path: 'equipe', loadChildren: () => import('./equipe/equipe.module').then(m => m.EquipeModule) },
{ path: 'detailEquipe', loadChildren: () => import('./detail-equipe/detail-equipe.module').then(m => m.DetailEquipeModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
