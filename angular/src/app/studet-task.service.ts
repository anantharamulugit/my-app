import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StudetTaskService {

  constructor(private _httpClient:HttpClient) { }

  getstudentTask():Observable<any>{
    return this._httpClient.get("https://6128991386a213001729f9df.mockapi.io/test/v1/student")
  }

  getFilteredStudentTask(term:string):Observable<any>{
    return this. _httpClient.get("https://6128991386a213001729f9df.mockapi.io/test/v1/student?filter="+term);
  }
  
  getSortStudentTask(limit:string,order:string):Observable<any>{
    return this. _httpClient.get("https://6128991386a213001729f9df.mockapi.io/test/v1/student?sortBy="+limit+"&order"+order);
  }

  getPageStudentTask(page:string,limit:string):Observable<any>{
    return this._httpClient.get("https://6128991386a213001729f9df.mockapi.io/test/v1/student?limit="+limit+"&page="+page);
  }

  deleteStudentTask(id:string):Observable<any>{
    return this._httpClient.delete("https://6128991386a213001729f9df.mockapi.io/test/v1/student/"+id)
  }

  creatStudentTask(studentTask:any):Observable<any>{
    return this. _httpClient.post("https://6128991386a213001729f9df.mockapi.io/test/v1/student",studentTask)
  }


}
