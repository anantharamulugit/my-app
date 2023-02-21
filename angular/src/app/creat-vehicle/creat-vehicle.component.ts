import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { __values } from 'tslib';
import { VehicleService } from '../vehicle.service';

@Component({
  selector: 'app-creat-vehicle',
  templateUrl: './creat-vehicle.component.html',
  styleUrls: ['./creat-vehicle.component.css']
})
export class CreatVehicleComponent {
  public vehicleForm:FormGroup= new FormGroup(
    {
      vehicle: new FormControl(),
      manufacturer:new FormControl(),
      model:new FormControl(),
      type:new FormControl(),
      color:new FormControl(),
      image:new FormControl(),
    }
  )
  public isEdit:boolean=false;
  public id:any="";

  constructor(private _vehicleSevice:VehicleService, private _activatedRouter:ActivatedRoute){
    this._activatedRouter.params.subscribe(
      (data:any)=>{this._vehicleSevice.getVehicleDetails(data.id).subscribe(
          (data:any)=>{if(data.id){this.isEdit=true;this.id=data.id;}
            this.vehicleForm.patchValue(data);})})
          }
  
  submit(){
      console.log(this.vehicleForm.value);
      if(this.isEdit){
                     //updata
        this._vehicleSevice.updateVehicle(this.vehicleForm.value,this.id).subscribe(
          (data:any)=>{alert("vehicle updated succesfully")},
          (err:any)=>{alert("Internal server error");})}
      else{
                      //create
         this._vehicleSevice.creatVehicle(this.vehicleForm.value).subscribe(
          (data:any)=>{alert("vehicle create succesfully");},
          (err:any)=>{alert("Internal server error")})}
        }
}
