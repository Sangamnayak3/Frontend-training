import { Component } from '@angular/core';

@Component({
  selector: 'app-empsalary',
  templateUrl: './empsalary.component.html',
  styleUrls: ['./empsalary.component.css']
})
export class EmpsalaryComponent {
  array:any[]=
  [
    {"SNo":1, "EName" :"SCOTT", "Grades":1, "Sal":70000},
    {"SNo":2, "EName":"ABRONS", "Grades":2, "Sal":40000},
    {"SNo":3, "EName":"SMITH", "Grades":3, "Sal":35000},
    {"SNo":4, "EName":"JAMES", "Grades":4, "Sal":30000},
    {"SNo":5, "EName":"ADAM", "Grades":1, "Sal":50000},
    {"SNo":6, "EName":"SATYA", "Grades":3, "Sal":60000},
    {"SNo":7, "EName":"MANISH", "Grades":4, "Sal":25000},
    {"SNo":8, "EName":"HANEESH", "Grades":2, "Sal":45000},
  ]
}
