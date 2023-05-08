import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CourseInsComponent } from './user-instructor/course-ins/course-ins.component';
import { CourseAddComponent } from './user-instructor/course-add/course-add.component';
import { CourseUpdateComponent } from './user-instructor/course-update/course-update.component';
import { CourseStuComponent } from './user-students/course-stu/course-stu.component';
import { CourseProgressComponent } from './user-students/course-progress/course-progress.component';

const routes: Routes = [
  {
    path: '',
    component: CourseStuComponent
  },
  {
    path: 'instructor-course',
    component: CourseInsComponent
  },
  {
    path: 'add-course',
    component: CourseAddComponent
  },
  {
    path: 'instructor-course/update-course/:courseId',
    component: CourseUpdateComponent
  },
  {
    path: 'student-course',
    component: CourseStuComponent
  },
  {
    path: 'student-progress',
    component: CourseProgressComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
