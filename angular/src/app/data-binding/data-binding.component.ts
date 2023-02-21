import { Component } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent {

   public name:string="raju";
   public age:number=25;
   public isindian:boolean=true;

   public phone:number=90;

   submit(){
    alert("submit clicked");
   }

   filter(){
    alert("key pressed in input");
   }

   cancel(){
    alert("mounsed ented in cancel button")
   }


}
