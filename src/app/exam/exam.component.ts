import { Component } from '@angular/core';

@Component({
  selector: 'app-exam',
  templateUrl: './exam.component.html',
  styleUrls: ['./exam.component.scss']
})
export class ExamComponent {

  fname = "";
  lname = "";
  id = "";
  enroll = "";
  exam = ""
  day : any;
  subject = "";
  date : any;

  hideregister = true;
  hideupdate = false

  editnow = false;
  registernow = true;

  examsrch : any;

  searchstaff : any;
 

  toholdindex : any;
  toholdobj : any;

  constructor(){
    let data = localStorage.getItem('exam_data');
    if(data)

    this.examRegistration = JSON.parse(data);
  }

  examRegistration : any =[];

  register()
  {
    let obj = {
      fname : this.fname,
      lname : this.lname,
      id  :this.id,
      enroll : this.enroll,
      exam : this.exam,
      day:this.day,
      subject:this.subject,
      date :this.date,
    }
    this.examRegistration.push(obj);
    console.log("student data :" , this.examRegistration);
    this.clear();
     // using local storage to store the data on table
     localStorage.setItem('exam_data' , JSON.stringify(this.examRegistration))
  }

  clear()
  {
    this.fname = "",
    this.lname = "",
    this.id = "",
    this.enroll = "",
    this.exam = "",
    this.day = "",
    this.subject = "",
    this.date = ""

  }
  delete(index:any)
  {
    this.examRegistration.splice(index,1)
  }

  edit(index:any , editinp:any)
  {

    this.toholdindex = index,
    this.toholdobj = editinp,

    this.fname = editinp.fname,
    this.lname = editinp.lname,
    this.id = editinp.email,
    this.enroll = editinp.password,
    this.exam = editinp.studentid,
    this.day = editinp.year,
    this.subject = editinp.degree,
    this.date = editinp.phone

    this.hideregister = false;
    this.hideupdate = true;

    this.editnow = true;
    this.registernow = false;
  }

  update()
  {
    this.examRegistration[this.toholdindex].fname = this.fname,
    this.examRegistration[this.toholdindex].lname = this.lname,
    this.examRegistration[this.toholdindex].id = this.id,
    this.examRegistration[this.toholdindex].enroll = this.enroll,
    this.examRegistration[this.toholdindex].exam = this.exam,
    this.examRegistration[this.toholdindex].day = this.day,
    this.examRegistration[this.toholdindex].subject = this.subject,
    this.examRegistration[this.toholdindex].date = this.date

    this.clear();

    this.hideregister = true;
    this.hideupdate = false;
    this.registernow = true;
    this.editnow = false;
 

  }
}
