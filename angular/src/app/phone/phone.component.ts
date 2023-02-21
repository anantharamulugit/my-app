import { Component } from '@angular/core';
import { PhoneService } from '../phone.service';

@Component({
  selector: 'app-phone',
  templateUrl: './phone.component.html',
  styleUrls: ['./phone.component.css']
})
export class PhoneComponent {
  public phones:any=[
    {company:'samsung',price:20000},
    {company:'iphone',price:25000},
    {company:'oneplus',price:27000},
    {company:'redme',price:30000}
  ]

  
}
