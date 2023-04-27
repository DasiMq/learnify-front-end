import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { catchError, throwError } from 'rxjs';
import { Course } from 'src/app/models/course.model';
import { CoursesService } from 'src/app/services/course/courses.service';


@Component({
  selector: 'app-course-ins',
  templateUrl: './course-ins.component.html',
  styleUrls: ['./course-ins.component.scss']
})

export class CourseInsComponent implements AfterViewInit, OnInit {

  course: Course[] = [];
  constructor(private coursesService: CoursesService) { }

  displayedColumns: string[] = ['courseId', 'courseTitle', 'courseDescription', 'courseDuration', 'coursePrice', 'action'];

  dataSource = new MatTableDataSource<Course>();

  @ViewChild(MatPaginator) paginator: MatPaginator | null = null;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  ngOnInit(): void {
    this.getAllCourses();
  }

  getAllCourses() {
    this.coursesService.getAllCourses()
      .subscribe(
        (response: Course[]) => {
          this.dataSource.data = response
        }
      ),
      (error: any) => {
        console.log(error);
      }
  }

  deleteCourse(courseId: number): void {
    this.coursesService.deleteCourse(courseId)
      .pipe(
        catchError((error) => {
          console.log(error);
          return throwError(error);
        })
      )
      .subscribe(() => {
        // Success
        console.log('Course deleted successfully');
        this.ngOnInit();
      });
  }
  

}

