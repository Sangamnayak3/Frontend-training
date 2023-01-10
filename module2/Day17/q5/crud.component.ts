import { Component } from '@angular/core';

@Component({
  selector: 'app-crud',
  templateUrl: './crud.component.html',
  styleUrls: ['./crud.component.css']
})
export class CrudComponent {

  deptno:number = 0;
  dname:string = "";
  loc:string = "";

  deptsArray:any[] = [
    {deptno : 10, dname : "Accounts",  loc :  "Hyd"} ,
    {deptno : 20, dname : "Sales",  loc :  "Pune"},
    {deptno : 30, dname : "Marketing",  loc :  "Hyd"}
  ];

  addButton_click():void
  {
      let deptObj:any = {};

      deptObj.deptno = this.deptno;
      deptObj.dname = this.dname;
      deptObj.loc = this.loc;

      this.deptsArray.push( deptObj );
  }
  removeButton_click(dno:number):void
  { 
      let index:number  = this.deptsArray.findIndex( item => item.deptno == dno );
      this.deptsArray.splice(index,1);  
  }

  selectButton_click(dno:number):void
  {    
     let deptObj:any = this.deptsArray.find( item => item.deptno == dno );
    
     this.deptno = deptObj.deptno;
     this.dname = deptObj.dname;
     this.loc = deptObj.loc;   
  }

  updateButton_click():void
  {    
      let index:number  = this.deptsArray.findIndex( item => item.deptno == this.deptno );
    this.deptsArray[index].dname = this.dname;
    this.deptsArray[index].loc = this.loc;    
  }
}