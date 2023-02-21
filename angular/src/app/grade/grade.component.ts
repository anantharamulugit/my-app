import { Component } from '@angular/core';

@Component({
  selector: 'app-grade',
  templateUrl: './grade.component.html',
  styleUrls: ['./grade.component.css']
})
export class GradeComponent {
  
  public marks:number=0;
  public grade:string="";
  public result:number=0;

  calculator(){
    if(this.marks<=100 && this.marks>90){
      this.grade="A";
    }
    else if(this.marks<90 && this.marks>50){
      this.grade="B"
    }
    else if(this.marks<50 && this.marks>35){
      this.grade="C"
    }
    else{
      this.grade="fail"
    }


  }

  

}
