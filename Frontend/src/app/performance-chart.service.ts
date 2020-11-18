import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {results} from 'src/app/real';
import {UserData} from 'src/app/real';
import {Observable} from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { throwError } from 'rxjs/internal/observable/throwError';
@Injectable({
  providedIn: 'root'
})
export class PerformanceChartService {

  constructor(private http: HttpClient) { }
  getResultById(quizId): Observable<any>
  {
     return this.http.get<any>('http://localhost:8080/participation-view/realtimeanalysis/'+quizId);
  }
  public getQuizById(quizId): Observable<any>
  {
     return this.http.get<any>('http://localhost:8080/realtimeanalysis/'+quizId);
  }
}
