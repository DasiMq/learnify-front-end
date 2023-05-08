import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/app/environments/environment';
import { Progress } from 'src/app/models/progress.model';

@Injectable({
  providedIn: 'root'
})
export class ProgressService {

  baseApiUrl: string = environment.baseApiUrl;
  constructor(private http: HttpClient) { }

  getAllProgress() : Observable<Progress[]> {
    return this.http.get<Progress[]>(this.baseApiUrl + '/api/Progress');
  }

  addProgress(addProgressRequest: Progress) {
    return this.http.post<Progress>(this.baseApiUrl + '/api/Progress', addProgressRequest);
  }
}
