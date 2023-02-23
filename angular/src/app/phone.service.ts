import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PhoneService {
  public phones:any=[
    {company:'samsung',price:20000},
    {company:'iphone',price:20000},
    {company:'oneplus',price:20000},
    {company:'redme',price:20000},
  ];

  constructor(private _phoneservice:PhoneService){
    this.phones=this._phoneservice.phones;
  }

  
}
