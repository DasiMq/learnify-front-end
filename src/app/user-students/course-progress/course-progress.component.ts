import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Course } from 'src/app/models/course.model';
import { Enrollment } from 'src/app/models/enrollment.model';
import { Progress } from 'src/app/models/progress.model';
import { CoursesService } from 'src/app/services/course/courses.service';
import { EnrollmentService } from 'src/app/services/enrollment/enrollment.service';
import { ProgressService } from 'src/app/services/progress/progress.service';

@Component({
  selector: 'app-course-progress',
  templateUrl: './course-progress.component.html',
  styleUrls: ['./course-progress.component.scss']
})
export class CourseProgressComponent {
  progress: Progress[] = [];
  enrollment: Enrollment[] = [];
  course: Course[] = [];

  constructor(
    private progressService: ProgressService,
    private enrollmentService: EnrollmentService,
    private coursesService: CoursesService,
    public dialog: MatDialog
  ) { }

  progressDetails: Progress = {
    progressId: 0,
    courseProgress: 0,
    completionStatus: '',
    date: new Date(),
    progressEnrollmentId: 0,
    progressCourseId: 0
  };

  enrollmentDetails: Enrollment = {
    enrollmentId: 0,
    enrollmentDate: new Date(),
    paymentStatus: '',
    enrollmentStudentId: 0,
    enrollmentCourseId: 0
  };

  courseDetails: Course = {
    courseId: 0,
    courseName: '',
    courseDescription: '',
    courseDuration: 0,
    coursePrice: 0
  };

  ngAfterViewInit(): void { }

  ngOnInit() {
    this.getAllEnrollments();
    this.getAllCourses();
    this.getAllProgress();
  }

  getAllEnrollments() {
    this.enrollmentService.getAllEnrollments()
      .subscribe(
        (response: Enrollment[]) => {
          this.enrollment = response;
        }
      ),
      (error: any) => {
        console.log(error);
      }
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

  getAllProgress() {
    this.progressService.getAllProgress()
      .subscribe(
        (response: Progress[]) => {
          this.progress = response;
        }
      ),
      (error: any) => {
        console.log(error);
      }
  }

  getCourseName(courseId: number): string {
    const course = this.course.find(course => course.courseId === courseId);
    return course ? course.courseName : '';
  }

  getCourseDescription(courseId: number): string {
    const course = this.course.find(course => course.courseId === courseId);
    return course ? course.courseDescription : '';
  }
}
