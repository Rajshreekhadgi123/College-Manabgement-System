import { Component } from '@angular/core';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.scss']
})
export class StudentComponent {

  fname = "";
  lname = "";
  email = "";
  password = "";
  studentid = "";
  year : any;
  degree : any;
  phone = "";
  state = ""
  pin = "";
  stuimg : any;
  
  hideregister = true;
  hideupdate = false

  editnow = false;
  registernow = true;

  alertmessage = false;
  updatemessage = false;
  
  stusearch :any;


  toholdindex : any;
  toholdobj : any;

  constructor(){
    let data = localStorage.getItem('student_Data');
    if(data)
    
    this.sturegistration = JSON.parse(data);
    
  }
  
  sturegistration : any =[];

  register()
  {
    let obj = {
      fname : this.fname,
      lname : this.lname,
      email  :this.email,
      password : this.password,
      studentid : this.studentid,
      year  :this.year,
      degree : this.degree,
      phone  :this.phone,
      state : this.state,
      pin  :this.pin,
      stuimg: this.stuimg
    }
   

    this.sturegistration.push(obj);
    console.log("student data :" , this.sturegistration);
   
    this.alertmessage = true;
    
    this.clear();
    

     // using local storage to store the data on table
     localStorage.setItem('student_Data' , JSON.stringify(this.sturegistration))
  }

  clear()
  {
    this.fname = "",
    this.lname = "",
    this.email = "",
    this.password = "",
    this.studentid = "",
    this.year = "",
    this.degree = "",
    this.phone = "",
    this.state = "",
    this.pin = "",
    this.stuimg = ""

  }
  delete(index:any)
  {
    this.sturegistration.splice(index,1)
    localStorage.setItem('student_Data' , JSON.stringify(this.sturegistration))

  }

  edit(index:any , editinp:any)
  {

    this.toholdindex = index,
    this.toholdobj = editinp,

    this.fname = editinp.fname,
    this.lname = editinp.lname,
    this.email = editinp.email,
    this.password = editinp.password,
    this.studentid = editinp.studentid,
    this.year = editinp.year,
    this.degree = editinp.degree,
    this.phone = editinp.phone,
    this.state = editinp.state,
    this.pin = editinp.pin,
    this.stuimg = editinp.stuimg

    this.hideregister = false;
    this.hideupdate = true;

    this.editnow = true;
    this.registernow = false;
    this.alertmessage = false;
    localStorage.setItem('student_Data' , JSON.stringify(this.sturegistration))

  }

  update()
  {
    this.sturegistration[this.toholdindex].fname = this.fname,
    this.sturegistration[this.toholdindex].lname = this.lname,
    this.sturegistration[this.toholdindex].email = this.email,
    this.sturegistration[this.toholdindex].password = this.password,
    this.sturegistration[this.toholdindex].studentid = this.studentid,
    this.sturegistration[this.toholdindex].year = this.year,
    this.sturegistration[this.toholdindex].degree = this.degree,
    this.sturegistration[this.toholdindex].phone = this.phone,
    this.sturegistration[this.toholdindex].state = this.state,
    this.sturegistration[this.toholdindex].pin = this.pin
    this.sturegistration[this.toholdindex].stuimg = this.stuimg

    this.clear();

    this.hideregister = true;
    this.hideupdate = false
    this.updatemessage = true;
    this.registernow = true;
    this.editnow = false;
    localStorage.setItem('student_Data' , JSON.stringify(this.sturegistration))


  }

//   timer: ReturnType<typeof setTimeout> = setTimeout(() => {
//     this.alertmessage=false;
// }, 2000);

onselectFile(e:any)
{
  if(e.target.files)
  {
    var reader = new FileReader();
    reader.readAsDataURL(e.target.files[0]);
    reader.onload = (event:any)=>{
      this.stuimg = event.target.result;
    }
  }
}
  
  
}
