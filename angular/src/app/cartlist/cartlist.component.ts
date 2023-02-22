import { Component } from '@angular/core';
import { CommonService } from '../common.service';

@Component({
  selector: 'app-cartlist',
  templateUrl: './cartlist.component.html',
  styleUrls: ['./cartlist.component.css']
})
export class CartlistComponent {
  constructor(private _commenService:CommonService){}
  public cartCount:number=0;
  

  

}
