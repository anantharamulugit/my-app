import { Component } from '@angular/core';

@Component({
  selector: 'app-employes',
  templateUrl: './employes.component.html',
  styleUrls: ['./employes.component.css']
})
export class EmployesComponent {
  public employes:any=[
    {name:'raju',position:'CEO',office:'india',age:26,startdate:'03-01-2023',salary:'$100'},
    {name:'kalandhar',position:'ananthapuram developer',office:'usa',age:28,startdate:'03-01-2023',salary:'$90'},
    {name:'naresh',position:'karimnagar devoloper',office:'adaman nikobar',age:30,startdate:'03-01-2022',salary:'$80'},
    {name:'sai',position:'nalgonda developer',office:'maldiv',age:35,startdate:'03-01-2021',salary:'$70'},
    




  ]

}
