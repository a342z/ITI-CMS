import { Component, OnInit } from '@angular/core';
import { Clinic } from 'src/app/_models/clinic';
import { ClinicService } from 'src/app/services/clinic.service';
import { Router } from '@angular/router';
<<<<<<< HEAD
import { Doctor } from 'src/app/_models/doctor';
import { DoctorsService } from 'src/app/doctors.service';

=======
>>>>>>> main
@Component({
  selector: 'app-clinic-add',
  templateUrl: './clinic-add.component.html',
  styleUrls: ['./clinic-add.component.css']
})
export class ClinicAddComponent implements OnInit {
  idCounter: number = 1;
<<<<<<< HEAD
  clinic = new Clinic(0, '','',"0");
=======
  clinic = new Clinic(this.idCounter, '','',0);
>>>>>>> main

  updateFlag: boolean = false;
  detailsFlag: boolean = false;
  updateIndex: number = -1;
  showImageFlag: boolean = true;
  rating: number = 5 ;
  add:boolean = false;
<<<<<<< HEAD
  _id: any = null;
  name: any = null;
  address: any = null;

  doctors:Doctor[] = []; 
  doctorId: any = null;

=======
  file:any;

  onFileChange(s:any){
      this.file=s.target.files[0];
  }
>>>>>>> main
  showAdd()
  {
    this.add = true ;
  }

  incrementId() {
    return this.idCounter++;
  }


  addClinic() {
<<<<<<< HEAD
    this.clinic.doctor=this.doctorId
    console.log("AA",this.clinic)

    this.ClinicService.addClinic(this.clinic).subscribe(
      (data: any)=>console.log("bb",data)) ;
=======

    this.ClinicService.addClinic(this.clinic).subscribe(
      (data: any)=>console.log(data)) ;
>>>>>>> main
      this.router.navigate(['/clinics']);
     ;
  }


<<<<<<< HEAD
  constructor(public ClinicService:ClinicService, public doctorService:DoctorsService,public router: Router) { }

  ngOnInit(): void {
    this.doctorService.getAllDoctors().subscribe(data=>this.doctors=data);
  }


=======
  constructor(public ClinicService:ClinicService, public router: Router) { }

  ngOnInit(): void {
  }

>>>>>>> main
}
