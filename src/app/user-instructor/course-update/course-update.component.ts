import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Course } from 'src/app/models/course.model';
import { CoursesService } from 'src/app/services/course/courses.service';

@Component({
  selector: 'app-course-update',
  templateUrl: './course-update.component.html',
  styleUrls: ['./course-update.component.scss']
})
export class CourseUpdateComponent implements OnInit {
  course!: Course;
  courseId: number = 0;
  courseForm: FormGroup = new FormGroup({});
  constructor(private route: ActivatedRoute, public router: Router, private fb: FormBuilder, private coursesService: CoursesService) { }

  // courseDetails: Course = {
  //   courseId: 0,
  //   courseName: '',
  //   courseDescription: '',
  //   courseDuration: 0,
  //   coursePrice: 0
  // };

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
    this.coursesService.getCourse(courseId).subscribe(resp => {
      this.course = resp;
      console.log(this.course);
    })
  }



  // onUpdate(courseId: number) {
  //   console.log(this.courseForm.value);
  //   this.coursesService.updateCourse(courseId, this.courseForm.value)
  //   .subscribe(response => {
  //     console.log(response);
  //     this.courseForm.reset();
  //     this.router.navigate(['/instructor-course/update-course/' + this.courseId]);
  //   })






    // this.route.paramMap.subscribe({
    //   next: (params) => {
    //     const courseId = params.get('courseId');
    //     if(courseId) {
    //       this.coursesService.getCourse(parseInt(courseId, 10))
    //       .subscribe({
    //         next: (response) => {
    //           this.courseForm.setValue(response);
    //         }
    //       })
    //     }
    //   }
    // })
  }

