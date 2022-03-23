import { Injectable } from '@angular/core';
import { Prescription } from './../_models/prescription';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root',
})
export class PrescriptionService {
  private Prescriptions: Prescription[] = [];

  getAllPrescriptions(){
    return this.http.get<Prescription[]>("http://localhost:8080/prescription")

  }
  addPrescription(new_Medicine:Prescription){
    return this.http.post<Prescription>("http://localhost:8080/prescription",new_Medicine)
  }
  getPrescriptionById(id:number)
  {
      return this.http.get<Prescription>("http://localhost:8080/prescription/"+id)
  }
  updatePrescription(new_Medicine:Prescription){
    return this.http.put<Prescription>("http://localhost:8080/prescription",new_Medicine);
  }
  delPrescription(id:number){
    return this.http.delete("http://localhost:8080/prescription/"+id);
  }

  constructor(public http:HttpClient) {}
}
