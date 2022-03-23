import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DoctorListComponent } from './doctor/doctor-list/doctor-list.component';
import { DoctorDetailsComponent } from './doctor/doctor-details/doctor-details.component';
import { DoctorEditComponent } from './doctor/doctor-edit/doctor-edit.component';
import { DoctorAddComponent } from './doctor/doctor-add/doctor-add.component';
import { ErrorComponent } from './error/error.component';
import { HomeComponent } from './home/home.component';
import { CommonModule } from '@angular/common';
import { AppointmentTableComponent } from './appointment/appointment-table/appointment-table.component';
import { PatientListComponent } from './patient/patient-list/patient-list.component';
import { PatientDetailsComponent } from './patient/patient-details/patient-details.component';
import { PatientEditComponent } from './patient/patient-edit/patient-edit.component';
import { PatientAddComponent } from './patient/patient-add/patient-add.component';

const routes:Routes=[
  {path:"home",component:HomeComponent},
  { path: "appointments", component: AppointmentTableComponent },
  {path:"",redirectTo:"/home",pathMatch:"full"},
  {path:"doctors",component:DoctorListComponent,children:
  [
    {path:"details/:id",component:DoctorDetailsComponent},
    {path:"edit/:id",component:DoctorEditComponent},
  ]},
  {path :"patients/add" , component:PatientAddComponent},
  {path:"patients",component:PatientListComponent,children:
  [
    {path:"details/:id",component:PatientDetailsComponent},
    {path:"edit/:id",component:PatientEditComponent},
  ]},
  {path:"doctors/add",component:DoctorAddComponent},
  {path:"**",component:ErrorComponent},


];
@NgModule({
  declarations: [],
  imports: [
    CommonModule,RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
