import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
import { Observable, of } from 'rxjs';
import { Salaire } from '../model/salaire';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class SalaireService {

  private salairesUrl = 'app/salaires';

  constructor(private http: HttpClient) { }



  getSalaires(): Observable<Salaire[]> {
    return this.http.get<Salaire[]>(this.salairesUrl + '/salaires')
      .pipe(
        catchError(this.handleError<Salaire[]>('getSalaires', []))
      );
  }


  /** POST: add a new hero to the server */
  addSalaire(salaire: Salaire): Observable<Salaire> {
    return this.http.post<Salaire>(this.salairesUrl + '/addSalaire', salaire, httpOptions).pipe(
      catchError(this.handleError<Salaire>('AddSalaire'))
    );
  }



  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      // console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      alert(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

}
