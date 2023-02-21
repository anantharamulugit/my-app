import { Component } from '@angular/core';
import { Subscriber } from 'rxjs';
import { StudetTaskService } from '../studet-task.service';

@Component({
  selector: 'app-student-task',
  templateUrl: './student-task.component.html',
  styleUrls: ['./student-task.component.css']
})
export class StudentTaskComponent {
  public term:string="";
  public studentTasks:any=[];
  public column:string="";
  public order:string="";
  public limit:any=[];
  public page:any=[];


  constructor(private _studentTaskService:StudetTaskService){
    _studentTaskService.getstudentTask().subscribe(
      (data:any)=>{
        alert(this.studentTasks=data)},
      (err:any)=>{
        alert("Internal server error");
      }
    )
  }

  filter(){
      this. _studentTaskService.getFilteredStudentTask(this.term).subscribe(
        (data:any)=>{
          this.studentTasks=data;
        },
        (err:any)=>{
          alert("Internal server error");
        }
      )
  }

  sort(){
    this._studentTaskService.getSortStudentTask(this.column,this.order).subscribe(
      (data:any)=>{this.studentTasks=data;},
      (err:any)=>{alert("Internal server error")}
    )
  }

  pagination(){
    this._studentTaskService.getPageStudentTask(this.page,this.limit).subscribe(
      (data:any)=>{this.studentTasks=data;},
      (err:any)=>{alert ("Internal server error")}
    )
  }

  delete(id:string){
    this._studentTaskService.deleteStudentTask(id).subscribe(
      (data:any)=>{alert("delete succesfully")},
      (err:any)=>{alert("Internal server error")}
    )
  }
}
