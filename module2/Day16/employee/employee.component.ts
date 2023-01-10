import { Component } from '@angular/core';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent {
  public Employee_Id : number = 10256;
  public Employee_Name : string = "Scott";
  public Employee_Job : string = "Manager";
  public Employee_Deptno : number = 10; 
}
