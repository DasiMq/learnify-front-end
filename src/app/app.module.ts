import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './shared-module/nav-bar/nav-bar.component';
import { CourseInsComponent } from './user-instructor/course-ins/course-ins.component';
import { CourseUpdateComponent } from './user-instructor/course-update/course-update.component';
import { CourseAddComponent } from './user-instructor/course-add/course-add.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CourseStuComponent } from './user-students/course-stu/course-stu.component';
import { CourseEnrollComponent } from './user-students/course-enroll/course-enroll.component';
import { CourseProgressComponent } from './user-students/course-progress/course-progress.component';
import { NavBarStudentComponent } from './shared-module/nav-bar-student/nav-bar-student.component';
import { MatDialogModule } from '@angular/material/dialog';
import { CourseEnrollDialogComponent } from './user-students/course-stu/course-enroll-dialog/course-enroll-dialog.component';
import { MatSelectModule } from '@angular/material/select';
import { MatProgressBarModule } from '@angular/material/progress-bar';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    CourseInsComponent,
    CourseUpdateComponent,
    CourseAddComponent,
    CourseStuComponent,
    CourseEnrollComponent,
    CourseProgressComponent,
    NavBarStudentComponent,
    CourseEnrollDialogComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatTableModule,
    MatPaginatorModule,
    MatFormFieldModule,
    MatInputModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MatDialogModule,
    MatSelectModule,
    MatProgressBarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
