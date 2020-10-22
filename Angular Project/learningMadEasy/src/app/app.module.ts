import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SliderComponent } from './slider/slider.component';
import { CourseCategoryComponent } from './course-category/course-category.component';
import { FeaturedCourseComponent } from './featured-course/featured-course.component';
import { FeaturedTeacherComponent } from './featured-teacher/featured-teacher.component';
import { EventsComponent } from './events/events.component';
import { HomepageComponent } from './homepage/homepage.component';
import { CoursesListComponent } from './courses-list/courses-list.component';
import { AppRoutingModule } from './app-routing.module';
import { TeacherListComponent } from './teacher-list/teacher-list.component';
import { TeacherDetailsComponent } from './teacher-details/teacher-details.component';
import { CourseDetailsComponent } from './course-details/course-details.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { AboutComponent } from './about/about.component';
import { LoginComponent } from './login/login.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    SliderComponent,
    CourseCategoryComponent,
    FeaturedCourseComponent,
    FeaturedTeacherComponent,
    EventsComponent,
    HomepageComponent,
    CoursesListComponent,
    TeacherListComponent,
    TeacherDetailsComponent,
    CourseDetailsComponent,
    ContactUsComponent,
    AboutComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
