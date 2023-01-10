import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-employeedata',
  templateUrl: './employeedata.component.html',
  styleUrls: ['./employeedata.component.css']
})
export class EmployeedataComponent {

  empno:number = 0;
  ename:string = "";
  job:string = "";
  sal:number = 0;
  deptno:number = 0;

  public array : any[] = [];
  constructor (private httpObj : HttpClient){}

  getData_click() : void{

    let url:string ="http://localhost:3000/employees";
    this.httpObj.get(url).subscribe((response:any) =>
    {
      console.log(response);
      this.array = response;
    }) ;
  }

  postData_click() : void{

    let url:string ="http://localhost:3000/employees";
    
    let empObj:any = {};
    
    empObj.ename = this.ename;
    empObj.job = this.job;
    empObj.sal = this.sal;
    empObj.deptno = this.deptno;
    
    this.httpObj.post(url, empObj).subscribe((response:any) =>
    {
      alert("New Employee data has been saved into the server");
      this.getData_click();
    })
  }

}
