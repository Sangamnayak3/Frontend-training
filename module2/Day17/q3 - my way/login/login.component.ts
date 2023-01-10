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
  result1:string  = "";
  result2:string  = "";
  count:number = 0;
  isLoginButtonDisabled:boolean = false;

  public loginButton_click():void
  {
      if(this.uid == "admin" && this.pwd == "admin123")
      {
         this.result1 = "Welcome to Admin";
         this.result2 = "";
      }
      else
      {
        this.result2 = "Invalid user id or password";
        this.result1 = "";
        this.count++;
        
        if(this.count == 3)
        {
          alert("You have reched maximum chances of wrong password");
          this.isLoginButtonDisabled = true;
        }
      }
  }
}
