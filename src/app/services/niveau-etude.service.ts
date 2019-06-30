import { Injectable } from '@angular/core';
import { NiveauEtude } from '../model/NiveauEtude';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
import { Observable, of } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class NiveauEtudeService {

  private niveauEtudesUrl = 'app/niveauEtudes';  // URL to web api
  public niveauEtudes: NiveauEtude[];

  constructor(private http: HttpClient) { }



  // Get EMployees from Backend
  getNiveauEtudes(): Observable<NiveauEtude[]> {
    return this.http.get<NiveauEtude[]>(this.niveauEtudesUrl + '/niveauEtudes')
      .pipe(
        catchError(this.handleError<NiveauEtude[]>('getNiveauEtude', []))
      );
  }


  /** PUT: update the hero on the server */
  updateNiveauEtude(niveauEtude: NiveauEtude): Observable<any> {
    return this.http.put(this.niveauEtudesUrl + '/updateNiveauEtude', niveauEtude, httpOptions).pipe(
      catchError(this.handleError<any>('updateNiveauEtude'))
    );
  }


  /** POST: add a new hero to the server */
  addNiveauEtude(niveauEtude: NiveauEtude): Observable<NiveauEtude> {
    return this.http.post<NiveauEtude>(this.niveauEtudesUrl + '/addNiveauEtude', niveauEtude, httpOptions).pipe(
      catchError(this.handleError<NiveauEtude>('addHero'))
    );
  }

  // Delete niveauEtude , i am suffring my project was accedentaly deleted , ples cry with me
  deleteniveauEtude(niveauEtude: NiveauEtude | number): Observable<NiveauEtude> {
    const id = typeof niveauEtude === 'number' ? niveauEtude : niveauEtude.idNiveauEtude;
    const url = `${this.niveauEtudesUrl}/niveauEtude/${id}`;

    return this.http.delete<NiveauEtude>(url, httpOptions).pipe(
      catchError(this.handleError<NiveauEtude>('deletEmoloyee'))
    );
  }


  /* GET heroes whose name contains search term */
  searchNiveauEtudes(term: string): Observable<NiveauEtude[]> {
    if (!term.trim()) {
      // if not search term, return empty hero array.
      return of([]);
    }
    return this.http.get<NiveauEtude[]>(`${this.niveauEtudesUrl}/search/?name=${term}`).pipe(
      catchError(this.handleError<NiveauEtude[]>('searchNiveauEtude', []))
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
