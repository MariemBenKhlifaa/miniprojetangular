import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FooterComponent } from './footer/footer.component';

const routes: Routes = [{ path: 'students', loadChildren: () => import('./students/students.module').then(m => m.StudentsModule)},
{ path: 'teachers', loadChildren: () => import('./teachers/teachers.module').then(m => m.TeachersModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
