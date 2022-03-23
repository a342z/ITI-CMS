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
import { MedicineModule } from './medicine/medicine.module';
import { MedicineListComponent } from './medicine/medicine-list/medicine-list.component';

const routes:Routes=[
  {path:"home",component:HomeComponent},
  { path: "appointments", component: AppointmentTableComponent },
  { path: "medicine", component: MedicineListComponent },
  {path:"",redirectTo:"/home",pathMatch:"full"},
  {path:"doctors",component:DoctorListComponent,children:
  [
    {path:"details/:id",component:DoctorDetailsComponent},
    {path:"edit/:id",component:DoctorEditComponent},
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
  