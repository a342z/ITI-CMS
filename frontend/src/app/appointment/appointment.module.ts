import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppointmentTableComponent } from './appointment-table/appointment-table.component';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';



@NgModule({
  declarations: [AppointmentTableComponent],
  imports: [
    CommonModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule
  ],
  exports: [
    AppointmentTableComponent
  ]
})
export class AppointmentModule { }
