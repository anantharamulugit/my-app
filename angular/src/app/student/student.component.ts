import { Component } from '@angular/core';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent {
  public name:string="";
  public dob:string='';
  public education:string="";
  public company:string="";
  public packege:number=0;

  public term:string="";
  public term1:string="";
  public isplaced:boolean=false;
  public students:any=[
    {name:'raju',dob:'03-01-1996',education:'BA',isplaced:true,company:'WIPRO',package:1200000},
    {name:'hari',dob:'03-03-2000',education:'MBA',isplaced:false,company:'BERKADADIA',package:1600000},
    {name:'ayush',dob:'28-04-2001',education:'b.tech',isplaced:true,company:'TCS',package:1800000},
    {name:'nihal',dob:'04-05-2003',education:'bba',isplaced:false,company:'HCL',package:1600000},
    {name:'rahul',dob:'03-06-2020',education:'b.com',isplaced:true,company:'ACCENTURE',package:1100000}
  ]

  search(){
    this.students=this.students.filter((student:any)=>student.name.indexOf(this.term)!=-1)
  };
  search1(){
    this.students=this.students.filter((student:any)=>student.company.indexOf(this.term1)!=-1)
  }
  onlyPlacedStudents(){
  this.students=this.students.filter(
    (student:any)=>student.isplaced==true);
  
};
notplacedstudents(){
  this.students=this.students.filter(
    (student:any)=>student.isplaced==false);

}
packagelowtohigh(){
  this.students=this.students.sort((a:any,b:any)=>a.package-b.package);
};

packagehightolow(){
  this.students=this.students.sort((a:any,b:any)=>b.package-a.package);

}
delete(i:any){
  this.students.splice(i,1)
}

bonus(){
  this.students=this.students.map((student:any)=>{
    student.package=student.package+50000;
    return student
  })
}
cuttings(){
  this.students=this.students.map((student:any)=>{
    student.package=student.package-50000;
    return student
  })
}

total(){
  var total=this.students.reduce((sum:any,student:any)=>sum+student.package,0);
  alert("total package is"+total);
  
}

totalstudunt(){
  alert("total student is:"+this.students.length)
}

add(){
    var product={
      name:this.name,
      dob:this.dob,
      education:this.education,
      isplaced:this.isplaced,
      company:this.company,
      package:this.packege
    }
    this.students.push(product);
  }
}






