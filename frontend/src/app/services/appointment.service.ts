import { Inject,Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Appointment } from '../models/appointment';

@Injectable({
  providedIn: 'root'
})
export class AppointmentService {

  constructor(public http: HttpClient, @Inject("baseURL") public baseURL:string) {
    this.baseURL += "appointments/"
   }

  
  getAppointments()
  {
    console.log(this.baseURL);
    return this.http.get<Appointment[]>(this.baseURL)
  }
}
