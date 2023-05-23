import { Component } from '@angular/core';

@Component({
  selector: 'app-staff',
  templateUrl: './staff.component.html',
  styleUrls: ['./staff.component.scss']
})
export class StaffComponent {

  fname = "";
  lname = "";
  email = "";
  password = "";
  phone = "";
  status : any;
  city = "";
  address = "";
  state = ""
  pin = "";

  hideregister = true;
  hideupdate = false

  editnow = false;
  registernow = true;

  staffsrch : any;

  toholdindex : any;
  toholdobj : any;

  constructor(){
   let data = localStorage.getItem('staff_data');
   if(data)
   this.staffRegistration = JSON.parse(data);
  }

  staffRegistration : any =[];

  register()
  {
    let obj = {
      fname : this.fname,
      lname : this.lname,
      email  :this.email,
      password : this.password,
      city : this.city,
      address:this.address,
      status:this.status,
      phone  :this.phone,
      state : this.state,
      pin  :this.pin
    }
    this.staffRegistration.push(obj);
    console.log("student data :" , this.staffRegistration);
    this.clear();

     // using local storage to store the data on table
     localStorage.setItem('staff_data' , JSON.stringify(this.staffRegistration))
    
  }

  clear()
  {
    this.fname = "",
    this.lname = "",
    this.email = "",
    this.password = "",
    this.city = "",
    this.address = "",
    this.status = "",
    this.phone = "",
    this.state = "",
    this.pin = ""

  }
  delete(index:any)
  {
    this.staffRegistration.splice(index,1)
  }

  edit(index:any , editinp:any)
  {

    this.toholdindex = index,
    this.toholdobj = editinp,

    this.fname = editinp.fname,
    this.lname = editinp.lname,
    this.email = editinp.email,
    this.password = editinp.password,
    this.city = editinp.studentid,
    this.address = editinp.year,
    this.status = editinp.degree,
    this.phone = editinp.phone,
    this.state = editinp.state,
    this.pin = editinp.pin

    this.hideregister = false;
    this.hideupdate = true;

    this.editnow = true;
    this.registernow = false;
  }

  update()
  {
    this.staffRegistration[this.toholdindex].fname = this.fname,
    this.staffRegistration[this.toholdindex].lname = this.lname,
    this.staffRegistration[this.toholdindex].email = this.email,
    this.staffRegistration[this.toholdindex].password = this.password,
    this.staffRegistration[this.toholdindex].studentid = this.city,
    this.staffRegistration[this.toholdindex].year = this.address,
    this.staffRegistration[this.toholdindex].degree = this.status,
    this.staffRegistration[this.toholdindex].phone = this.phone,
    this.staffRegistration[this.toholdindex].state = this.state,
    this.staffRegistration[this.toholdindex].pin = this.pin

    this.clear();

    this.hideregister = true;
    this.hideupdate = false;
    this.registernow = true;
    this.editnow = false;


  }
}
