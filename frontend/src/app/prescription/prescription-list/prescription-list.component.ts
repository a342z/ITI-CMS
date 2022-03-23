import { Component, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { Prescription } from 'src/app/_models/prescription';
import { MatTable } from '@angular/material/table';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { ViewChild } from '@angular/core';
import { PrescriptionService } from './../../services/prescription.service';
@Component({
  selector: 'app-prescription-list',
  templateUrl: './prescription-list.component.html',
  styleUrls: ['./prescription-list.component.css'],
})
export class PrescriptionListComponent implements OnInit, OnChanges {
  public dataSource = new MatTableDataSource<Prescription>();

  prescription_add: Prescription = {
    _id: 1,
    doctor: 1,
    patient: 1,
    medicine: 1,
    date: new Date(14 / 10 / 1996),
  };
  info: Prescription = {
    _id: 1,
    doctor: 1,
    patient: 1,
    medicine: 1,
    date: new Date(1 / 1 / 1995),
  };
  prescription: Prescription[] = [];
  displayedColumns: string[] = [
    'ID',
    'doctor',
    'patient',
    'price',
    'medicine',
    'date',
  ];
  add_display = 'none';
  info_display = 'none';
  add_open() {
    this.add_display = 'flex';
  }
  add_close() {
    this.add_display = 'none';
  }
  info_open() {
    this.info_display = 'flex';
  }
  info_close() {
    this.info_display = 'none';
  }
  @ViewChild(MatTable, { static: true }) table!: MatTable<any>;
  add_new() {
    this.service
      .addPrescription(this.prescription_add)
      .subscribe((a) => console.log(a));
    this.add_display = 'none';
    window.location.reload();
  }
  update_one() {
    this.service
      .updatePrescription(this.prescription_add)
      .subscribe((a) => console.log(a));
    this.add_display = 'none';
    this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
      this.router.navigate(['/prescription']);
    });
  }
  open_update(
    _id: number,
    doctor: number,
    patient: number,
    medicine: number,
    date: Date
  ) {
    this.prescription_add._id = _id;
    this.prescription_add.doctor = doctor;
    this.prescription_add.patient = patient;
    this.prescription_add.medicine = medicine;
    this.prescription_add.date = date;
    this.add_display = 'flex';
  }
  show_info(
    _id: number,
    doctor: number,
    patient: number,
    medicine: number,
    date: Date
  ) {
    this.info._id = _id;
    this.info.doctor = doctor;
    this.info.patient = patient;
    this.info.medicine = medicine;
    this.info.date = date;
    this.info_open();
  }
  delete_one(_id: number) {
    this.service.delPrescription(_id).subscribe((a) => console.log(a));
    this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
      this.router.navigate(['/prescription']);
    });
  }
  public doFilter = (e: any) => {
    this.dataSource.filter = e.target.value.trim().toLocaleLowerCase();
  };
  constructor(public service: PrescriptionService, public router: Router) {}
  ngOnChanges(changes: SimpleChanges): void {
    this.service
      .getAllPrescriptions()
      .subscribe((a) => (this.dataSource.data = a as Prescription[]));
  }

  ngOnInit(): void {
    this.service
      .getAllPrescriptions()
      .subscribe((a) => (this.dataSource.data = a as Prescription[]));
  }
}
