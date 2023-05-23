import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  email = "";
  password = "";

  loginform :any=[];

  logindata()
  {
    let obj = {
      email : this.email,
      password : this.password
    }

    this.loginform.push(obj);
    console.log("login data" , this.loginform)
    this.clear();
  }

  clear()
  {
    this.email = "";
    this.password = "";
  }
}
