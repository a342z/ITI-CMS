import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppointmentTableComponent } from './appointment/appointment-table/appointment-table.component';

const routes: Routes = [
  { path: "appointments", component: AppointmentTableComponent },
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
  