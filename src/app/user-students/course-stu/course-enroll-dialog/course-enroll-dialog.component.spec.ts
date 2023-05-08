import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseEnrollDialogComponent } from './course-enroll-dialog.component';

describe('CourseEnrollDialogComponent', () => {
  let component: CourseEnrollDialogComponent;
  let fixture: ComponentFixture<CourseEnrollDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CourseEnrollDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CourseEnrollDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
