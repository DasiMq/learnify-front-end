import { AfterViewInit, Component, OnInit } from '@angular/core';
import { Course } from 'src/app/models/course.model';
import { CoursesService } from 'src/app/services/course/courses.service';
import { MatDialog } from '@angular/material/dialog';
import { CourseEnrollDialogComponent } from './course-enroll-dialog/course-enroll-dialog.component';

@Component({
  selector: 'app-course-stu',
  templateUrl: './course-stu.component.html',
  styleUrls: ['./course-stu.component.scss']
})
export class CourseStuComponent implements AfterViewInit, OnInit {
  course: Course[] = [];
  constructor(
    private coursesService: CoursesService,
    public dialog: MatDialog
  ) { }

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

  enrollCourseDialog(courseId: number) {
    const dialogRef = this.dialog.open(CourseEnrollDialogComponent, {
      width: '500px',
      data: { courseId }
    });

    dialogRef.afterClosed()
      .subscribe(_result => {
        console.log('The dialog was closed');
      });
  }
}
