import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PhoneService {
  public phones:any=[];

  constructor(private _phoneservice:PhoneService){
    this.phones=this._phoneservice.phones;
  }

  
}
