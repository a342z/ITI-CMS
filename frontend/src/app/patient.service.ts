import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Patient } from './_models/patient';

@Injectable({
  providedIn: 'root'
})
export class PatientService {

  baseUrl:string = "http://localhost:8080/patients/";

  private patients:Patient[]=[];

  getAllPatient(){
    return this.http.get<Patient[]>(this.baseUrl);
  }

  getPatientById(id:number){
    return this.http.get<Patient>(this.baseUrl+id);
  }

  addPatient(patient:Patient){
    return this.http.post<Patient>(this.baseUrl,patient);
  }

  setPatientById(id:number ,patient:Patient){
    return this.http.put<Patient>(this.baseUrl,patient)
  }

  deletePatient(_id:number){
    return this.http.request('delete',this.baseUrl,{body:{_id}})
  }

  constructor(public http:HttpClient) { }
}
