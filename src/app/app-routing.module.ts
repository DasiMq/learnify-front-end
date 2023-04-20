import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CourseInsComponent } from './user-instructor/course-ins/course-ins.component';
import { CourseAddComponent } from './user-instructor/course-add/course-add.component';

const routes: Routes = [
  {
    path: '',
    component: CourseInsComponent
  },
  {
    path: 'instructor-course',
    component: CourseInsComponent
  },
  {
    path: 'add-course',
    component: CourseAddComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
