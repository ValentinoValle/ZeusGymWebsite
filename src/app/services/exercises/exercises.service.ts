import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders, HttpParams } from '@angular/common/http';
import { Exercise } from '../../interfaces/exercise';
import { throwError } from 'rxjs';
import { catchError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ExercisesService {
  readonly ROOT_URL = 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/dist/exercises.json';

  constructor(private http: HttpClient) {}

  private errorHandler(error: HttpErrorResponse) {    
      return throwError(() => new Error(error.message))
  }
    
  getExercises(searchText: string) {
    return this.http
      .get<Exercise[]>(this.ROOT_URL)
      .pipe(catchError(this.errorHandler));
  }
}
