import { Component } from '@angular/core';

@Component({
  selector: 'app-teacher',
  templateUrl: './teacher.component.html',
  styleUrls: ['./teacher.component.scss']
})
export class TeacherComponent {
  fname = "";
  lname = "";
  email = "";
  password = "";
  dob :any;
  gender : any =['male','female'];
  status : any;
  phone = "";
  state = ""
  pin = "";

  hideregister = true;
  hideupdate = false

  editnow = false;
  registernow = true;
  

  teachsrch :any;

  toholdindex : any;
  toholdobj : any;

  constructor(){
   let data = localStorage.getItem('Teacher_data');
   if(data)
   this.TeacherRegistration = JSON.parse(data);
  }

  TeacherRegistration : any =[];

  register()
  {
    let obj = {
      fname : this.fname,
      lname : this.lname,
      email  :this.email,
      password : this.password,
      dob : this.dob,
      gender:this.gender,
      status:this.status,
      phone  :this.phone,
      state : this.state,
      pin  :this.pin
    }
    this.TeacherRegistration.push(obj);
    console.log("student data :" , this.TeacherRegistration);
    this.clear();

     // using local storage to store the data on table
     localStorage.setItem('Teacher_data' , JSON.stringify(this.TeacherRegistration))
  }

  clear()
  {
    this.fname = "",
    this.lname = "",
    this.email = "",
    this.password = "",
    this.dob = "",
    this.gender = "",
    this.status = "",
    this.phone = "",
    this.state = "",
    this.pin = ""

  }
  delete(index:any)
  {
    this.TeacherRegistration.splice(index,1)
  }

  edit(index:any , editinp:any)
  {

    this.toholdindex = index,
    this.toholdobj = editinp,

    this.fname = editinp.fname,
    this.lname = editinp.lname,
    this.email = editinp.email,
    this.password = editinp.password,
    this.dob = editinp.studentid,
    this.gender = editinp.year,
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
    this.TeacherRegistration[this.toholdindex].fname = this.fname,
    this.TeacherRegistration[this.toholdindex].lname = this.lname,
    this.TeacherRegistration[this.toholdindex].email = this.email,
    this.TeacherRegistration[this.toholdindex].password = this.password,
    this.TeacherRegistration[this.toholdindex].studentid = this.dob,
    this.TeacherRegistration[this.toholdindex].year = this.gender,
    this.TeacherRegistration[this.toholdindex].degree = this.status,
    this.TeacherRegistration[this.toholdindex].phone = this.phone,
    this.TeacherRegistration[this.toholdindex].state = this.state,
    this.TeacherRegistration[this.toholdindex].pin = this.pin

    this.clear();

    this.hideregister = true;
    this.hideupdate = false;
    this.registernow = true;
    this.editnow = false;

  }
}
