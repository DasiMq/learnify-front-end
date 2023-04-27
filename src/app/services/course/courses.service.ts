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

  getCourse(courseId: number) : Observable<Course>{
    return this.http.get<Course>(this.baseApiUrl + '/api/Course/' + courseId)
  }

  updateCourse(courseId: number, updateCourseRequest: Course ) : Observable<Course> {
    return this.http.put<Course>(`${this.baseApiUrl}/api/Course/${courseId}`, updateCourseRequest);
  }

  deleteCourse(courseId: number): Observable<Course> {
    return this.http.delete<Course>(`${this.baseApiUrl}/api/Course/${courseId}`);
  }
  
}
