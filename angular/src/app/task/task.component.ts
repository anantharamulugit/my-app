import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { StudetTaskService } from '../studet-task.service';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent {
  constructor(private _studentTaskSevice:StudetTaskService){}

  public studentTaskForm:FormGroup=new FormGroup(
    {
      name:new FormControl(),
      city:new FormControl(),
      phone:new FormControl(),
      address:new FormControl(),
      photo:new FormControl(),
      placedIn:new FormControl(),
      salary:new FormControl(),
      Id:new FormControl(),
      
    }
  )
  submit(){
    console.log(this.studentTaskForm.value);
    this._studentTaskSevice.creatStudentTask(this.studentTaskForm.value).subscribe(
      (data:any)=>{alert("student creat succuss")},
      (err:any)=>{alert("Internal server error")}
    )
  }

}
