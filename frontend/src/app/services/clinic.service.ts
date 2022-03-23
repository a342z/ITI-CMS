import {Inject, Injectable } from '@angular/core';
import { Clinic } from './../_models/clinic';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ClinicService {

<<<<<<< HEAD
  private clinics:Clinic[]=[];



  addClinic(clinic:Clinic){
    console.log(clinic)
    return this.http.post<Clinic>(this.baseURL,clinic);

  }


  
=======


  addClinic(clinic:Clinic){
    let form:FormData=new FormData();//setting enctype : multipart/formdata
    form.append("_id",clinic._id.toString());
    form.append("name",clinic.name);
    form.append("address",clinic.address);
    form.append("doctor",clinic.doctor.toString());

    return this.http.post<Clinic>(this.baseURL,form);

  }

>>>>>>> main
  getAllClinics(){
    console.log("get clinics")
    return this.http.get<Clinic[]>(this.baseURL);
  }

  deleteClinic(_id:number)
  {
<<<<<<< HEAD
    console.log(_id)
=======
>>>>>>> main
    return this.http.request('delete', this.baseURL, { body: {_id} })
  }
  getClinicById(id: number) {
    return this.http.get<Clinic>(this.baseURL+id);

  }

  setClinicById(id:number,clinic:Clinic)
  {
<<<<<<< HEAD
    console.log("ZZ",clinic  )
    return this.http.put<Clinic>(this.baseURL,clinic);

=======
    return this.http.put<Clinic>(this.baseURL,clinic);
>>>>>>> main
  }

  constructor(public http:HttpClient,@Inject('baseURL') public baseURL:string) {
    this.baseURL+="clinics/"
<<<<<<< HEAD
    
   }
}
=======

   }
}
>>>>>>> main
