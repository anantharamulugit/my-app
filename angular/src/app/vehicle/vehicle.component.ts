import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { filter, Observable } from 'rxjs';
import { Vehicle } from '../vehicle';
import { VehicleService } from '../vehicle.service';

@Component({
  selector: 'app-vehicle',
  templateUrl: './vehicle.component.html',
  styleUrls: ['./vehicle.component.css']
})
export class VehicleComponent {
  public term:string="";
  public vehicles:Vehicle[]=[];

  public column:string="";
  public order:string="";
  
  public Page:string="";
  public limit:any=[];

  constructor(private _vehicleSevices:VehicleService,private _router:Router){
    _vehicleSevices.getVehicle().subscribe(
      (data:Vehicle[])=>{this.vehicles=data;},
      (err:any)=>{alert("Inetrnal server error")})}

  filter(){
    this. _vehicleSevices.getFilterVehicles(this.term).subscribe(
      (data:any)=>{this.vehicles=data;},
      (err:any)=>{alert("Internal server error");})}

  sort(){
    this. _vehicleSevices.getSortVehicles(this.column,this.order).subscribe(
      (data:any)=>{this.vehicles=data;},
      (err:any)=>{alert("Internal server error");})}

   pagination(){
    this. _vehicleSevices.getPageVehicles(this.limit,this.Page).subscribe(
      (data:any)=>{this.vehicles=data;},
      (err:any)=>{alert("Internal server error");})}

   delete(id:string){
    this._vehicleSevices.deleteVehicle(id).subscribe(
     (data:any)=>{alert("vehicle deleted succesfully");location.reload()},
     (err:any)=>{alert("Internal server error");})}

   view(id:string){
    this._router.navigateByUrl("/dashboard/vehicle-details/"+id)}

   edit(id:string){
      this._router.navigateByUrl("/dashboard/edit-vehicle/"+id);}

   
  }



