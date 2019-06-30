import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
import { Observable, of } from 'rxjs';
import { Pret } from '../model/Pret';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};


@Injectable({
  providedIn: 'root'
})
export class PretService {
  private pretsUrl = 'app/prets';  // URL to web api
  public prets: Pret[];

  constructor(private http: HttpClient) { }



  // Get EMployees from Backend
  getPrets(): Observable<Pret[]> {
    return this.http.get<Pret[]>(this.pretsUrl + '/prets')
      .pipe(
        catchError(this.handleError<Pret[]>('getPret', []))
      );
  }


  /** PUT: update the hero on the server */
  updatePret(pret: Pret): Observable<any> {
    return this.http.put(this.pretsUrl + '/updatePret', pret, httpOptions).pipe(
      catchError(this.handleError<any>('updatePret'))
    );
  }


  /** POST: add a new hero to the server */
  addPret(pret: Pret): Observable<Pret> {
    return this.http.post<Pret>(this.pretsUrl + '/addPret', pret, httpOptions).pipe(
      catchError(this.handleError<Pret>('addHero'))
    );
  }

  // Delete pret , i am suffring my project was accedentaly deleted , ples cry with me
  deletePret(pret: Pret | number): Observable<Pret> {
    const id = typeof pret === 'number' ? pret : pret.idPret;
    const url = `${this.pretsUrl}/pret/${id}`;

    return this.http.delete<Pret>(url, httpOptions).pipe(
      catchError(this.handleError<Pret>('deletEmoloyee'))
    );
  }


  /* GET heroes whose name contains search term */
  searchPrets(term: string): Observable<Pret[]> {
    if (!term.trim()) {
      // if not search term, return empty hero array.
      return of([]);
    }
    return this.http.get<Pret[]>(`${this.pretsUrl}/search/?name=${term}`).pipe(
      catchError(this.handleError<Pret[]>('searchPret', []))
    );
  }

  payerPret(idPret: number, somme: number) {
    const username = sessionStorage.getItem('username');


    return this.http.post<string>(this.pretsUrl + '/paiePret', {
      idPret, somme, username}, httpOptions).pipe(
      catchError(this.handleError<string>('payerPret'))
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
