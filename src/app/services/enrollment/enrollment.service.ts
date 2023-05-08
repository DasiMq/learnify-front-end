import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/app/environments/environment';
import { Enrollment } from 'src/app/models/enrollment.model';

@Injectable({
  providedIn: 'root'
})
export class EnrollmentService {

  baseApiUrl: string = environment.baseApiUrl;
  constructor(private http: HttpClient) { }

  getAllEnrollments() : Observable<Enrollment[]> {
    return this.http.get<Enrollment[]>(this.baseApiUrl + '/api/Enrollment');
  }

  addEnrollment(addEnrollmentRequest: Enrollment) {
    return this.http.post<Enrollment>(this.baseApiUrl + '/api/Enrollment', addEnrollmentRequest);
  }
}
