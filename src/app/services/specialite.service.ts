import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
import { Observable, of } from 'rxjs';
import { Specialite } from '../model/Specialite';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class SpecialiteService {

  private specialitesUrl = 'app/specialites';  // URL to web api
  public specialites: Specialite[];

  constructor(private http: HttpClient) { }



  // Get EMployees from Backend
  getSpecialites(): Observable<Specialite[]> {
    return this.http.get<Specialite[]>(this.specialitesUrl + '/specialites')
      .pipe(
        catchError(this.handleError<Specialite[]>('getSpecialite', []))
      );
  }


  /** PUT: update the hero on the server */
  updateSpecialite(specialite: Specialite): Observable<any> {
    return this.http.put(this.specialitesUrl + '/updateSpecialite', specialite, httpOptions).pipe(
      catchError(this.handleError<any>('updateSpecialite'))
    );
  }


  /** POST: add a new hero to the server */
  addSpecialite(specialite: Specialite): Observable<Specialite> {
    return this.http.post<Specialite>(this.specialitesUrl + '/addSpecialite', specialite, httpOptions).pipe(
      catchError(this.handleError<Specialite>('addHero'))
    );
  }

  // Delete specialite , i am suffring my project was accedentaly deleted , ples cry with me
  deletespecialite(specialite: Specialite | number): Observable<Specialite> {
    const id = typeof specialite === 'number' ? specialite : specialite.idSpecialite;
    const url = `${this.specialitesUrl}/specialite/${id}`;

    return this.http.delete<Specialite>(url, httpOptions).pipe(
      catchError(this.handleError<Specialite>('deletEmoloyee'))
    );
  }


  /* GET heroes whose name contains search term */
  searchSpecialites(term: string): Observable<Specialite[]> {
    if (!term.trim()) {
      // if not search term, return empty hero array.
      return of([]);
    }
    return this.http.get<Specialite[]>(`${this.specialitesUrl}/search/?name=${term}`).pipe(
      catchError(this.handleError<Specialite[]>('searchSpecialite', []))
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
