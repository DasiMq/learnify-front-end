import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Course } from 'src/app/models/course.model';
import { Enrollment } from 'src/app/models/enrollment.model';
import { PaymentStatus } from 'src/app/models/paymentStatus.model';
import { User } from 'src/app/models/user.model';
import { EnrollmentService } from 'src/app/services/enrollment/enrollment.service';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-course-enroll-dialog',
  templateUrl: './course-enroll-dialog.component.html',
  styleUrls: ['./course-enroll-dialog.component.scss']
})
export class CourseEnrollDialogComponent {

  enrollmentForm: FormGroup = new FormGroup({});
  router: any;
  constructor(
    private fb: FormBuilder,
    private enrollmentService: EnrollmentService,
    public dialogRef: MatDialogRef<CourseEnrollDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { courseId: number }
  ) { }

  paymentStatuses: PaymentStatus[] = [
    { value: 'paid', viewValue: 'Paid' },
    { value: 'pending', viewValue: 'Pending' },
    { value: 'processing', viewValue: 'Processing' },
  ];

  courseDetails: Course = {
    courseId: 0,
    courseName: '',
    courseDescription: '',
    courseDuration: 0,
    coursePrice: 0
  };

  studentDetails: User = {
    userId: 0,
    userName: '',
    userMail: '',
    password: '',
    phoneNumber: 0,
    address: '',
    userRole: ''
  }

  enrollmentDetails: Enrollment = {
    enrollmentId: 0,
    enrollmentDate: new Date(),
    paymentStatus: '',
    enrollmentStudentId: 0,
    enrollmentCourseId: 0
  };

  ngOnInit(): void {
    this.enrollmentForm = this.fb.group({
      enrollmentId: [0],
      enrollmentDate: [new Date()],
      paymentStatus: [''],
      enrollmentStudentId: [4],
      enrollmentCourseId: [this.data.courseId]
    });
  }

  onSubmit() {
    console.log(this.enrollmentForm.value);
    this.enrollmentService
      .addEnrollment(this.enrollmentForm.value)
      .subscribe((response) => {
        console.log(response);
        this.enrollmentForm.reset();
      });
  }
}
