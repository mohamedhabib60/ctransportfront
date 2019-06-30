import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
import { Observable, of } from 'rxjs';
import { Poste } from '../model/Poste';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class PosteService {
  private postesUrl = 'app/postes';  // URL to web api
  public postes: Poste[];

  constructor(private http: HttpClient) { }



  // Get EMployees from Backend
  getPostes(): Observable<Poste[]> {
    return this.http.get<Poste[]>(this.postesUrl + '/postes')
      .pipe(
        catchError(this.handleError<Poste[]>('getPoste', []))
      );
  }


  /** PUT: update the hero on the server */
  updatePoste(poste: Poste): Observable<any> {
    return this.http.put(this.postesUrl + '/updatePoste', poste, httpOptions).pipe(
      catchError(this.handleError<any>('updatePoste'))
    );
  }


  /** POST: add a new hero to the server */
  addPoste(poste: Poste): Observable<Poste> {
    return this.http.post<Poste>(this.postesUrl + '/addPoste', poste, httpOptions).pipe(
      catchError(this.handleError<Poste>('addHero'))
    );
  }

  // Delete poste , i am suffring my project was accedentaly deleted , ples cry with me
  deleteposte(poste: Poste | number): Observable<Poste> {
    const id = typeof poste === 'number' ? poste : poste.idPoste;
    const url = `${this.postesUrl}/poste/${id}`;

    return this.http.delete<Poste>(url, httpOptions).pipe(
      catchError(this.handleError<Poste>('deletEmoloyee'))
    );
  }


  /* GET heroes whose name contains search term */
  searchPostes(term: string): Observable<Poste[]> {
    if (!term.trim()) {
      // if not search term, return empty hero array.
      return of([]);
    }
    return this.http.get<Poste[]>(`${this.postesUrl}/search/?name=${term}`).pipe(
      catchError(this.handleError<Poste[]>('searchPoste', []))
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
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      alert(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }


}
