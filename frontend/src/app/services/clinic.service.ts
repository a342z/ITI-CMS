import {Inject, Injectable } from '@angular/core';
import { Clinic } from './../_models/clinic';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ClinicService {



  addClinic(clinic:Clinic){
    let form:FormData=new FormData();//setting enctype : multipart/formdata
    form.append("_id",clinic._id.toString());
    form.append("name",clinic.name);
    form.append("address",clinic.address);
    form.append("doctor",clinic.doctor.toString());

    return this.http.post<Clinic>(this.baseURL,form);

  }

  getAllClinics(){
    console.log("get clinics")
    return this.http.get<Clinic[]>(this.baseURL);
  }

  deleteClinic(_id:number)
  {
    return this.http.request('delete', this.baseURL, { body: {_id} })
  }
  getClinicById(id: number) {
    return this.http.get<Clinic>(this.baseURL+id);

  }

  setClinicById(id:number,clinic:Clinic)
  {
    return this.http.put<Clinic>(this.baseURL,clinic);
  }

  constructor(public http:HttpClient,@Inject('baseURL') public baseURL:string) {
    this.baseURL+="clinics/"

   }
}
