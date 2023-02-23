import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Vehicle } from '../vehicle';
import { VehicleService } from '../vehicle.service';

@Component({
  selector: 'app-vehicle-details',
  templateUrl: './vehicle-details.component.html',
  styleUrls: ['./vehicle-details.component.css']
})
export class VehicleDetailsComponent {

  public vehicle:Vehicle= <Vehicle>{};

  constructor(private _activatedRoute:ActivatedRoute,private _vehicleSevvice:VehicleService){
    this._activatedRoute.params.subscribe(
      (data:any)=>{
        this._vehicleSevvice.getVehicleDetails(data.id).subscribe(
          (data:any)=>{this.vehicle = data ;})})}
}
