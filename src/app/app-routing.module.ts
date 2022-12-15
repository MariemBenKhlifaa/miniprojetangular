import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FooterComponent } from './footer/footer.component';

const routes: Routes = [{ path: 'students', loadChildren: () => import('./students/students.module').then(m => m.StudentsModule)},
{ path: 'universites', loadChildren: () => import('./universites/universites.module').then(m => m.UniversitesModule) }
];

@NgModule({
  imports: [ CommonModule,RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
