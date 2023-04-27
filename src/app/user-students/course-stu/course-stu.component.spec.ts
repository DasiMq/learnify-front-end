import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseStuComponent } from './course-stu.component';

describe('CourseStuComponent', () => {
  let component: CourseStuComponent;
  let fixture: ComponentFixture<CourseStuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CourseStuComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CourseStuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
