import { LoginComponent } from './login/login.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { TeacherDetailsComponent } from './teacher-details/teacher-details.component';
import { TeacherListComponent } from './teacher-list/teacher-list.component';
import { CoursesListComponent } from './courses-list/courses-list.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { CourseDetailsComponent } from './course-details/course-details.component';
import { AboutComponent } from './about/about.component';


const routes: Routes = [
  { path: 'courses', component: CoursesListComponent },
  { path: 'teachers', component: TeacherListComponent},
  { path: 'course/id', component: CourseDetailsComponent },
  { path: 'teacher/id', component: TeacherDetailsComponent },
  { path: 'contact', component: ContactUsComponent },
  { path: 'about', component: AboutComponent },
  { path: 'login', component: LoginComponent },
  { path: '', component : HomepageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
