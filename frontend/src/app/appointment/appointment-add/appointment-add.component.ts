import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Appointment } from 'src/app/models/appointment';
import { AppointmentService } from 'src/app/services/appointment.service';

@Component({
  selector: 'app-appointment-add',
  templateUrl: './appointment-add.component.html',
  styleUrls: ['./appointment-add.component.css']
})
export class AppointmentAddComponent implements OnInit {

  appointment: Appointment | null = null;
  constructor(public appointmentService: AppointmentService, public router: Router) { }
  _id: any = null;
  patientId: any = null;
  doctorId: any = null;
  time: any = null;
  status = "pending";

  ngOnInit(): void {
  }

  save() {

    this.appointment = { _id: this._id, patientId: this.patientId, doctorId: this.doctorId, time: this.time, status: this.status };
    this.appointmentService.addAppointment(this.appointment).subscribe(a => { console.log(a); this.router.navigateByUrl("/appointments") });
  }

}
