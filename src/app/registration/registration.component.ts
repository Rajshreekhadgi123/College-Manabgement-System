import { Component } from '@angular/core';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent {

  fname = "";
  stuno = "";
  email = "";
  password = "";

  registration : any = [];

  registerdata()
  {

    let obj = {
      fname : this.fname,
      stuno  :this.stuno,
      email : this.email,
      password : this.password
    }

    this.registration.push(obj);
    console.log("registration data : " ,this.registration)
    this.clear();
  }

  clear()
  {
    this.fname = "";
    this.stuno = "";
    this.email = "";
    this.password = "";
  }

}
