import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MedicineListComponent } from './medicine-list/medicine-list.component';
import {MatTableModule} from '@angular/material/table';
import { FormsModule } from '@angular/forms';
import {MatButtonModule} from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon'
import {MatInputModule} from '@angular/material/input';



@NgModule({
  declarations: [
    MedicineListComponent
  ],
  imports: [
    CommonModule,
    MatTableModule,
    FormsModule,
    MatButtonModule,
    MatIconModule,
    MatInputModule
    
  ],
  exports:[
    MedicineListComponent
  ]
})
export class MedicineModule { }
