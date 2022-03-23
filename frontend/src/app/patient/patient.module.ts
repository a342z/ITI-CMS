import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PatientAddComponent } from './patient-add/patient-add.component';
import { PatientDetailsComponent } from './patient-details/patient-details.component';
import { PatientEditComponent } from './patient-edit/patient-edit.component';
import { PatientListComponent } from './patient-list/patient-list.component';
import { FormsModule } from '@angular/forms';
import {DialogModule} from 'primeng/dialog';
import {ButtonModule} from 'primeng/button';
<<<<<<< HEAD
import { RouterModule } from '@angular/router';
=======
>>>>>>> main


@NgModule({
  declarations: [
    PatientAddComponent,
    PatientDetailsComponent,
    PatientEditComponent,
    PatientListComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    DialogModule,
<<<<<<< HEAD
    ButtonModule,
    RouterModule
=======
    ButtonModule
>>>>>>> main
  ],
  exports:[
    PatientAddComponent,
    PatientEditComponent,
    PatientListComponent,
    PatientDetailsComponent
  ]
})
export class PatientModule { }
