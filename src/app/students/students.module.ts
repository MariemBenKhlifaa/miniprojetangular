import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StudentsRoutingModule } from './students-routing.module';
import { StudentsComponent } from './students.component';
import { FormsModule } from '@angular/forms';
import { FormulaireStudentComponent } from './formulaire-student/formulaire-student.component';
import { ShowstudentsComponent } from './showstudents/showstudents.component';
import { UpdateformComponent } from '../Students/updateform/updateform.component';



@NgModule({
  declarations: [
    StudentsComponent,
   FormulaireStudentComponent,
   ShowstudentsComponent,
   UpdateformComponent
  ],
  imports: [
    CommonModule,
    StudentsRoutingModule,FormsModule
  ]
})
export class StudentsModule { }
