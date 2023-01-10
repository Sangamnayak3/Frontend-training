import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-usersarr',
  templateUrl: './usersarr.component.html',
  styleUrls: ['./usersarr.component.css']
})
export class UsersarrComponent {

  public usersarray : any[] = [];
  constructor(private httpObj : HttpClient){}

  getData_click() : void{
    let url : string = "https://reqres.in/api/uers";
    this.httpObj.get(url).subscribe((response : any) =>
    {
      console.log(response.data);
      this.usersarray = response.data;
    })
  }
}
