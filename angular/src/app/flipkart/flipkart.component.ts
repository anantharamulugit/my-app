import { Component } from '@angular/core';
import { FlipcardService } from '../flipcard.service';

@Component({
  selector: 'app-flipkart',
  templateUrl: './flipkart.component.html',
  styleUrls: ['./flipkart.component.css']
})
export class FlipkartComponent {
  public flipkarts:any=[];
  constructor( private _flipkartSevices:FlipcardService){
    _flipkartSevices.getflipkart().subscribe(
      (data:any)=>{this.flipkarts=data;},
      (err:any)=>{alert("Internal server error");}
    
    )
  }

}
