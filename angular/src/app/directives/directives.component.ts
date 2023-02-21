import { Component } from '@angular/core';

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.css']
})
export class DirectivesComponent {
  public today:any= new Date();

  public user:any={name:'abc',age:25}

  public name:string="Raju";
  public names:string[]=["me","naresh","sai","kalandhar"];
  public states:string[]=["telangana","ap","tamila nadu"];

  public users:any=[
    {name:'raju',age:25},
    {name:'hari',age:30}
  ]

  public students:any=[
    {name:'anil',sub:'history',marks:80},
    {name:'bharath',sub:'eco',marks:20},
    {name:'chaitanya',sub:'math',marks:100},
    {name:'anil',sub:'history',marks:30},
    {name:'bharath',sub:'eco',marks:90},
    {name:'chaitanya',sub:'math',marks:13}
  ]
  
  public products:any=[
    {name:'pen',price:100,rating:4},
    {name:'shirt',price:200,rating:4.1},
    {name:'phone',price:300,rating:4.2},
    {name:'laptop',price:400,rating:4.3}
  ]

  public time:number=0;

}
