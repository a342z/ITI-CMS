import { Component, OnInit } from '@angular/core';
import { Clinic } from 'src/app/_models/clinic';
import { ClinicService } from 'src/app/services/clinic.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-clinic-list',
  templateUrl: './clinic-list.component.html',
  styleUrls: ['./clinic-list.component.css']
})
export class ClinicListComponent implements OnInit {
  query: string = '';
  showAndHideImage: boolean = true;

<<<<<<< HEAD
  constructor(public ClinicService: ClinicService) { }
  clinics: Clinic[] | null = null;
  sub: Subscription | null = null;
=======
  constructor(public ClinicService: ClinicService) {}
  clinics:Clinic[] | null = null ;
  sub:Subscription|null=null;
>>>>>>> main
  clinicDetails = 0;
  clinicedit = 0;

  ngOnInit(): void {
<<<<<<< HEAD
    this.load();
  }
  clin(clinics: Clinic[]) {
    for (let i = 0; i < clinics.length; i++) {
      if(clinics[i].doctor!=null)
      clinics[i].doctor = clinics[i].doctor.name;
    }
    this.clinics = clinics;

  }
  load() {
    this.ClinicService.getAllClinics().subscribe(
      clinics => this.clin(clinics)


    );
  }
  deleteClinic(id: number) {
    this.ClinicService.deleteClinic(id).subscribe(data => console.log(data));
    this.load();
  }
=======
  this.load();
}

load(){
  console.log("AAA",this.clinics)
  this.ClinicService.getAllClinics().subscribe(clinics => this.clinics = clinics);
  console.log("BBBB",this.clinics);
}
deleteClinic(id: number) {
  this.ClinicService.deleteClinic(id).subscribe(data => console.log(data)) ;
  this.load();
}
>>>>>>> main

  toggleImage(target: any) {
    target.textContent = this.showAndHideImage ? 'Show Image' : 'Hide Image';
    this.showAndHideImage = !this.showAndHideImage;
  }
}
