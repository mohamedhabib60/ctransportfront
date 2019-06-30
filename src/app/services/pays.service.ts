import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
import { Observable, of } from 'rxjs';
import { Pays } from '../model/Pays';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};




@Injectable({
  providedIn: 'root'
})
export class PaysService {


  private payssUrl = 'app/pays';  // URL to web api
  public payss: Pays[];

  constructor(private http: HttpClient) { }



  // Get EMployees from Backend
  getPays(): Observable<Pays[]> {
    return this.http.get<Pays[]>(this.payssUrl + '/pays')
      .pipe(
        catchError(this.handleError<Pays[]>('getPays', []))
      );
  }


  /** PUT: update the hero on the server */
  updatePays(pays: Pays): Observable<any> {
    return this.http.put(this.payssUrl + '/updatePays', pays, httpOptions).pipe(
      catchError(this.handleError<any>('updatePays'))
    );
  }


  /** POST: add a new hero to the server */
  addPays(pays: Pays): Observable<Pays> {
    return this.http.post<Pays>(this.payssUrl + '/addPays', pays, httpOptions).pipe(
      catchError(this.handleError<Pays>('addHero'))
    );
  }

  // Delete pays , i am suffring my project was accedentaly deleted , ples cry with me
  deletepays(pays: Pays | number): Observable<Pays> {
    const id = typeof pays === 'number' ? pays : pays.idPays;
    const url = `${this.payssUrl}/pays/${id}`;

    return this.http.delete<Pays>(url, httpOptions).pipe(
      catchError(this.handleError<Pays>('deletEmoloyee'))
    );
  }


  /* GET heroes whose name contains search term */
  searchPayss(term: string): Observable<Pays[]> {
    if (!term.trim()) {
      // if not search term, return empty hero array.
      return of([]);
    }
    return this.http.get<Pays[]>(`${this.payssUrl}/search/?name=${term}`).pipe(
      catchError(this.handleError<Pays[]>('searchPays', []))
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
