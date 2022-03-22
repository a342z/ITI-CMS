import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CoreModule } from './core/core.module';
import { HttpClientModule ,HTTP_INTERCEPTORS} from "@angular/common/http"
import { ArraySplicePipe } from './array-splice.pipe';
import {ButtonModule} from 'primeng/button';
import {DialogModule} from 'primeng/dialog';
import {ImageModule} from 'primeng/image';
import { CheckboxModule } from 'primeng/checkbox';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { DoctorListComponent } from './doctor/doctor-list/doctor-list.component';
import { DoctorDetailsComponent } from './doctor/doctor-details/doctor-details.component';
import { DoctorEditComponent } from './doctor/doctor-edit/doctor-edit.component';
import { DoctorAddComponent } from './doctor/doctor-add/doctor-add.component';
import { HomeComponent } from './home/home.component';
import { ErrorComponent } from './error/error.component';



@NgModule({
  declarations: [
    AppComponent,
    ArraySplicePipe,
    DoctorAddComponent,
    DoctorDetailsComponent,
    DoctorListComponent,
    DoctorEditComponent,
    HomeComponent,
    ErrorComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    CoreModule,
    HttpClientModule,
    ImageModule,
    CheckboxModule,
    DialogModule,
    ButtonModule,
    FormsModule,
    NgbModule,


  ],
  providers: [
    // {provide:HTTP_INTERCEPTORS,multi:true},
      { provide: "baseURL", useValue: "http://localhost:8080/" }

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
