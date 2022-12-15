import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FooterComponent } from './footer/footer.component';

const routes: Routes = [{ path: 'students', loadChildren: () => import('./students/students.module').then(m => m.StudentsModule)},
{ path: 'departements', loadChildren: () => import('./departements/departements.module').then(m => m.DepartementsModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
