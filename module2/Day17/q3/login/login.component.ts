import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent 
{
  uid:string  = "";
  pwd:string = "";
  result:string  = "";
  count:number = 0;
  isLoginButtonDisabled:boolean = false;
  resultColor:string = "";

  public loginButton_click():void
  {
      if(this.uid == "admin" && this.pwd == "admin123")
      {
         this.result = "Welcome to Admin";
         this.resultColor = "green";
      }
      else
      {
        this.result = "Invalid user id or password";
        this.count++;
        this.resultColor = "red";
        
        if(this.count == 3)
        {
          alert("You have reched maximum chances of wrong password");
          this.isLoginButtonDisabled = true;
        }
      }
  }
}
