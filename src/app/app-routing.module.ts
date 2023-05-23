import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { TeacherComponent } from './teacher/teacher.component';
import { StudentComponent } from './student/student.component';
import { StaffComponent } from './staff/staff.component';
import { ExamComponent } from './exam/exam.component';
import { RegistrationComponent } from './registration/registration.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {
    path:"", component: RegistrationComponent , pathMatch:'full',
  },
  {
    path:"login" , component:LoginComponent ,
  },
  {
    path:"home" , component:HomeComponent ,
  },
  {
    path:"teacher" , component:TeacherComponent ,
  },
  {
    path:"student" , component:StudentComponent ,
  },
  {
    path:"staff" , component:StaffComponent ,
  },
  {
    path:"exam" , component:ExamComponent ,
  }
];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
