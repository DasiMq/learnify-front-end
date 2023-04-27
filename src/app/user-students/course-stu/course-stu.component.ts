import { AfterViewInit, Component, OnInit } from '@angular/core';
import { Course } from 'src/app/models/course.model';
import { CoursesService } from 'src/app/services/course/courses.service';

@Component({
  selector: 'app-course-stu',
  templateUrl: './course-stu.component.html',
  styleUrls: ['./course-stu.component.scss']
})
export class CourseStuComponent implements AfterViewInit, OnInit {
  course: Course[] = [];
  constructor(private coursesService: CoursesService) { }

  ngAfterViewInit(): void { }

  ngOnInit() { 
    this.getAllCourses();
  }

  getAllCourses() {
    this.coursesService.getAllCourses()
      .subscribe(
        (response: Course[]) => {
          this.course = response;
        }
      ),
      (error: any) => {
        console.log(error);
      }
  }
}
