import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StudentsRoutingModule } from './students-routing.module';
import { StudentsComponent } from './students.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormulaireStudentComponent } from './formulaire-student/formulaire-student.component';
import { ShowstudentsComponent } from './showstudents/showstudents.component';
import { UpdateformComponent } from './updateform/updateform.component';
import { EquipeaffectationComponent } from './equipeaffectation/equipeaffectation.component';




@NgModule({
  declarations: [
    StudentsComponent,
   FormulaireStudentComponent,
   ShowstudentsComponent,
   UpdateformComponent,EquipeaffectationComponent
 
  ],
  imports: [
    CommonModule,
    StudentsRoutingModule,FormsModule,ReactiveFormsModule
  ]
})
export class StudentsModule { }
