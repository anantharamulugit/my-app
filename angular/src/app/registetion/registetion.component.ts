import { Component } from '@angular/core';

@Component({
  selector: 'app-registetion',
  templateUrl: './registetion.component.html',
  styleUrls: ['./registetion.component.css']
})
export class RegistetionComponent {
    public name:string="";
    public names:string[]=[];

    registetion(){
      this.names.push(this.name);
    }
}
