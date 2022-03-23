import { Component, OnInit } from '@angular/core';
import { Clinic } from 'src/app/_models/clinic';
import { ClinicService } from 'src/app/services/clinic.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-clinic-add',
  templateUrl: './clinic-add.component.html',
  styleUrls: ['./clinic-add.component.css']
})
export class ClinicAddComponent implements OnInit {
  idCounter: number = 1;
  clinic = new Clinic(0, '','',"0");

  updateFlag: boolean = false;
  detailsFlag: boolean = false;
  updateIndex: number = -1;
  showImageFlag: boolean = true;
  rating: number = 5 ;
  add:boolean = false;


  showAdd()
  {
    this.add = true ;
  }

  incrementId() {
    return this.idCounter++;
  }


  addClinic() {

    this.ClinicService.addClinic(this.clinic).subscribe(
      (data: any)=>console.log("XXXXX",data)) ;
      this.router.navigate(['/clinics']);
     ;
  }


  constructor(public ClinicService:ClinicService, public router: Router) { }

  ngOnInit(): void {
  }

}
