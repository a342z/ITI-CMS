import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DoctorAddComponent } from './doctor-add/doctor-add.component';
import { DoctorDetailsComponent } from './doctor-details/doctor-details.component';
import { DoctorListComponent } from './doctor-list/doctor-list.component';
import { DoctorEditComponent } from './doctor-edit/doctor-edit.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    DoctorAddComponent,
    DoctorDetailsComponent,
    DoctorListComponent,
    DoctorEditComponent
  ],
  imports: [
    CommonModule,FormsModule
  ],
  exports: [
    DoctorAddComponent,
    DoctorDetailsComponent,
    DoctorListComponent,
    DoctorEditComponent
  ],
})
export class DoctorModule { }
