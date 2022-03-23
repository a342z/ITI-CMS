import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DoctorListComponent } from './doctor/doctor-list/doctor-list.component';
import { DoctorDetailsComponent } from './doctor/doctor-details/doctor-details.component';
import { DoctorEditComponent } from './doctor/doctor-edit/doctor-edit.component';
import { DoctorAddComponent } from './doctor/doctor-add/doctor-add.component';

import { ClinicListComponent } from './clinic/clinic-list/clinic-list.component';
import { ClinicAddComponent } from './clinic/clinic-add/clinic-add.component';
import { ClinicEditComponent } from './clinic/clinic-edit/clinic-edit.component';
import { ClinicDetailsComponent } from './clinic/clinic-details/clinic-details.component';


import { ErrorComponent } from './error/error.component';
import { HomeComponent } from './home/home.component';
import { CommonModule } from '@angular/common';
import { AppointmentTableComponent } from './appointment/appointment-table/appointment-table.component';


const routes:Routes=[
  {path:"home",component:HomeComponent},
  { path: "appointments", component: AppointmentTableComponent },
  {path:"",redirectTo:"/home",pathMatch:"full"},
  {path:"doctors",component:DoctorListComponent,children:
  [
    {path:"details/:id",component:DoctorDetailsComponent},
    {path:"edit/:id",component:DoctorEditComponent},
  ]},
  {path:"doctors/add",component:DoctorAddComponent},

  


  {path:"clinics",component:ClinicListComponent,children:
  [
    {path:"details/:id",component:ClinicDetailsComponent},
    {path:"edit/:id",component:ClinicEditComponent},
  ]},
  {path:"clinics/add",component:ClinicAddComponent},
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
  