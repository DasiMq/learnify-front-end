import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { CoursesService } from 'src/app/services/course/courses.service';

@Component({
  selector: 'app-course-add',
  templateUrl: './course-add.component.html',
  styleUrls: ['./course-add.component.scss']
})
export class CourseAddComponent {

  courseForm: FormGroup = new FormGroup({});
  router: any;
  constructor(private fb: FormBuilder, private coursesService: CoursesService) { }

  ngOnInit(): void {
    this.courseForm = this.fb.group({
      courseId: [0],
      courseName: [''],
      courseDescription: [''],
      courseDuration: [0],
      coursePrice: [0]
    });
  }

  onSubmit() {
    console.log(this.courseForm.value);
    this.coursesService
      .addCourse(this.courseForm.value)
      .subscribe((response) => {
        console.log(response);
        this.courseForm.reset();
      });
  }
}
