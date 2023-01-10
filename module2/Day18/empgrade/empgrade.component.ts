import { Component } from '@angular/core';

@Component({
  selector: 'app-empgrade',
  templateUrl: './empgrade.component.html',
  styleUrls: ['./empgrade.component.css']
})
export class EmpgradeComponent {
  array:any[]=
  [
    {"SNo":1, "EName" :"SCOTT", "Grades":1},
    {"SNo":2, "EName":"ABRONS", "Grades":2},
    {"SNo":3, "EName":"SMITH", "Grades":3},
    {"SNo":4, "EName":"JAMES", "Grades":4},
    {"SNo":5, "EName":"ADAM", "Grades":1},
    {"SNo":6, "EName":"SATYA", "Grades":3},
    {"SNo":7, "EName":"MANISH", "Grades":4},
    {"SNo":8, "EName":"HANEESH", "Grades":2},
  ]
}
