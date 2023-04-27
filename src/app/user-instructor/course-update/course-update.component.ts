import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { mergeMap } from 'rxjs';
import { Course } from 'src/app/models/course.model';
import { CoursesService } from 'src/app/services/course/courses.service';
import { createLogicalAnd } from 'typescript';

@Component({
  selector: 'app-course-update',
  templateUrl: './course-update.component.html',
  styleUrls: ['./course-update.component.scss']
})
export class CourseUpdateComponent implements OnInit {
  course!: Course;
  submitted = false;
  courseId = this.route.snapshot.params['courseId'];
  courseForm: FormGroup = new FormGroup({});
  constructor(private route: ActivatedRoute, public router: Router, private fb: FormBuilder, private coursesService: CoursesService) { }

  courseDetails: Course = {
    courseId: 0,
    courseName: '',
    courseDescription: '',
    courseDuration: 0,
    coursePrice: 0
  };

  ngOnInit(): void {
    this.getCourse(this.courseId);

    this.courseForm = this.fb.group({
      courseId: [0],
      courseName: [''],
      courseDescription: [''],
      courseDuration: [0],
      coursePrice: [0]
    });
  }

  getCourse(courseId: number) {
    // console.log(this.courseForm.value);
    this.coursesService.getCourse(courseId)
      .subscribe({
        next: (response: Course) => {
          this.courseDetails = response;
          this.courseForm.controls['courseName'].setValue(this.courseDetails.courseName);
          this.courseForm.controls['courseDescription'].setValue(this.courseDetails.courseDescription);
          this.courseForm.controls['courseDuration'].setValue(this.courseDetails.courseDuration);
          this.courseForm.controls['coursePrice'].setValue(this.courseDetails.coursePrice);
          
          console.log(this.courseDetails);
        },
        error: (error: any) => {
          console.log(error);
        }
      });
  }


  updateCourse() {
    this.courseForm.value.courseId = this.courseId;
    console.log(this.courseForm.value);

    // Get the original course object from the server
    this.coursesService.getCourse(this.courseId).pipe(
      mergeMap((originalCourse: Course) => {
        // Create a new object with the updated properties merged from the form

        // Copy all properties from the original course
        // Merge in the updated properties from the form
        // Merge two JavaScript objects at runtime
        const updatedCourse: Course = { ...originalCourse, ...this.courseForm.value };

        // Send the updated course to the server
        return this.coursesService.updateCourse(this.courseId, updatedCourse);
      })
    ).subscribe({
      next: (response: Course) => {
        this.submitted = true;
        console.log(response);
      },
      error: (error: any) => {
        console.log(error);
      }
    });

  }
}

