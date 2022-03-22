import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PatientAddComponent } from './patient-add/patient-add.component';
import { PatientDetailsComponent } from './patient-details/patient-details.component';
import { PatientEditComponent } from './patient-edit/patient-edit.component';
import { PatientListComponent } from './patient-list/patient-list.component';



@NgModule({
  declarations: [
    PatientAddComponent,
    PatientDetailsComponent,
    PatientEditComponent,
    PatientListComponent
  ],
  imports: [
    CommonModule
  ]
})
export class PatientModule { }
