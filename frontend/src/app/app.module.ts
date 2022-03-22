import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MedicineModule } from './medicine/medicine.module';

import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppointmentModule } from './appointment/appointment.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MedicineModule
    HttpClientModule,
    AppointmentModule  
  ],
  providers: [
    { provide: "baseURL", useValue: "http://localhost:8080/" }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
