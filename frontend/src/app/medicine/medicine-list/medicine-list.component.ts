import { Component, OnInit } from '@angular/core';
import { Medicine } from '../medicine';
import { ViewChild } from '@angular/core';
import { MatTable } from '@angular/material/table';
@Component({
  selector: 'app-medicine-list',
  templateUrl: './medicine-list.component.html',
  styleUrls: ['./medicine-list.component.css']
})
export class MedicineListComponent implements OnInit {
  medicine_add:Medicine = {
    _id:1,
      comercial_name:"Calcijex",
      medical_name:"Calcitriol",
      price:10,
      image:"dvrvrvrvrvrvrvrb",
      manufacturer:"icvkecve",
      type:"tablet",
      form:"nvceknv",
      dose:{
        child:"niknoijnmo",
        adult:"jknboioi"
      },
      usage:"fbornborbr",
      side_effects:"evoevolejmvoe",
      description:"envkienvienvie"
  }
  info:Medicine = {
    _id:1,
      comercial_name:"Calcijex",
      medical_name:"Calcitriol",
      price:10,
      image:"dvrvrvrvrvrvrvrb",
      manufacturer:"icvkecve",
      type:"tablet",
      form:"nvceknv",
      dose:{
        child:"niknoijnmo",
        adult:"jknboioi"
      },
      usage:"fbornborbr",
      side_effects:"evoevolejmvoe",
      description:"envkienvienvie"
  }
  medicine_list:Medicine[]=[
    {
      _id:1,
      comercial_name:"Calcijex",
      medical_name:"Calcitriol",
      price:10,
      image:"dvrvrvrvrvrvrvrb",
      manufacturer:"icvkecve",
      type:"tablet",
      form:"nvceknv",
      dose:{
        child:"niknoijnmo",
        adult:"jknboioi"
      },
      usage:"fbornborbr",
      side_effects:"evoevolejmvoe",
      description:"envkienvienvie"
    },
    {
      _id:2,
      comercial_name:"Calcijex",
      medical_name:"Calcitriol",
      price:10,
      image:"dvrvrvrvrvrvrvrb",
      manufacturer:"icvkecve",
      type:"tablet",
      form:"nvceknv",
      dose:{
        child:"niknoijnmo",
        adult:"jknboioi"
      },
      usage:"fbornborbr",
      side_effects:"evoevolejmvoe",
      description:"envkienvienvie"
    },
    {
      _id:3,
      comercial_name:"brtbb",
      medical_name:"Calcitriol",
      price:10,
      image:"dvrvrvrvrvrvrvrb",
      manufacturer:"icvkecve",
      type:"tablet",
      form:"nvceknv",
      dose:{
        child:"niknoijnmo",
        adult:"jknboioi"
      },
      usage:"fbornborbr",
      side_effects:"evoevolejmvoe",
      description:"envkienvienvie"
    },
    {
      _id:4,
      comercial_name:"123243",
      medical_name:"Calcitriol",
      price:10,
      image:"dvrvrvrvrvrvrvrb",
      manufacturer:"icvkecve",
      type:"tablet",
      form:"nvceknv",
      dose:{
        child:"niknoijnmo",
        adult:"jknboioi"
      },
      usage:"fbornborbr",
      side_effects:"evoevolejmvoe",
      description:"envkienvienvie"
    },
    {
      _id:5,
      comercial_name:"Calcijex",
      medical_name:"Calcitriol",
      price:10,
      image:"dvrvrvrvrvrvrvrb",
      manufacturer:"icvkecve",
      type:"tablet",
      form:"nvceknv",
      dose:{
        child:"niknoijnmo",
        adult:"jknboioi"
      },
      usage:"fbornborbr",
      side_effects:"evoevolejmvoe",
      description:"envkienvienvie"
    },
    {
      _id:6,
      comercial_name:"Calcijex",
      medical_name:"Calcitriol",
      price:10,
      image:"dvrvrvrvrvrvrvrb",
      manufacturer:"icvkecve",
      type:"tablet",
      form:"nvceknv",
      dose:{
        child:"niknoijnmo",
        adult:"jknboioi"
      },
      usage:"fbornborbr",
      side_effects:"evoevolejmvoe",
      description:"envkienvienvie"
    }
  ]
  displayedColumns: string[] = ['ID', 'cname', 'mname', 'price','manufacturer','type','operations'];
  add_display = "none"
  info_display = "none"
  add_open(){
    this.add_display = "flex"
  }
  add_close(){
    this.add_display = "none"
  };
  info_open(){
    this.info_display = "flex"
  }
  info_close(){
    this.info_display = "none"
  };

  @ViewChild(MatTable,{static:true}) table!: MatTable<any>;
  add_new(){
      this.medicine_add._id = this.medicine_list.length+1
      this.medicine_list.push(this.medicine_add)
      this.table.renderRows();
    this.add_display = "none"
  };
  update_one(){
    for( let item of this.medicine_list){
      if(this.medicine_add._id === item._id){
        item.comercial_name=this.medicine_add.comercial_name;
        item.medical_name=this.medicine_add.medical_name;
        item.price=this.medicine_add.price;
        item.image=this.medicine_add.image;
        item.manufacturer=this.medicine_add.manufacturer;
        item.type=this.medicine_add.type;
        item.form=this.medicine_add.form;
        item.description=this.medicine_add.description;
        item.usage=this.medicine_add.usage;
        item.dose=this.medicine_add.dose;
        item.side_effects=this.medicine_add.side_effects;
        
      }
      this.table.renderRows();
      this.add_display = "none"
  }
}
  open_update(
    _id:number,
    comercial_name:string,
    medical_name:string,
    manufacturer:string,
    price:number,
    image:string,
    type:string,
    form:string,
    usage:any,
    dose:object,
    side_effects:any,
    description:string
    ){
      this.medicine_add._id=_id
      this.medicine_add.comercial_name=comercial_name
      this.medicine_add.medical_name=medical_name
      this.medicine_add.manufacturer=manufacturer
      this.medicine_add.price=price
      this.medicine_add.image=image
      this.medicine_add.type=type
      this.medicine_add.form=form
      this.medicine_add.usage=usage
      this.medicine_add.dose=dose
      this.medicine_add.side_effects=side_effects
      this.medicine_add.description=description
      this.add_display="flex"
      
  }
  show_info(
    _id:number,
    comercial_name:string,
    medical_name:string,
    manufacturer:string,
    price:number,
    image:string,
    type:string,
    form:string,
    usage:any,
    dose:object,
    side_effects:any,
    description:string
    ){
      this.info._id=_id
      this.info.comercial_name=comercial_name
      this.info.medical_name=medical_name
      this.info.manufacturer=manufacturer
      this.info.price=price
      this.info.image=image
      this.info.type=type
      this.info.form=form
      this.info.usage=usage
      this.info.dose=dose
      this.info.side_effects=side_effects
      this.info.description=description
      this.info_open()
      
  }

  constructor() { }

  ngOnInit(): void {
  }

}
