import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/app/environments/environment';
import { Course } from 'src/app/models/course.model';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {

  baseApiUrl: string = environment.baseApiUrl;
  constructor(private http: HttpClient) { }

  getAllCourses() : Observable<Course[]> {
    return this.http.get<Course[]>(this.baseApiUrl + '/api/Course');
  }

  addCourse(addCourseRequest: Course) {
    return this.http.post<Course>(this.baseApiUrl + '/api/Course', addCourseRequest);
  }
}
