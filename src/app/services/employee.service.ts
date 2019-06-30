import { Employee } from './../model/Employee';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
import { Observable, of } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  private employeesUrl = 'app/employees';  // URL to web api
  public employees: Employee[];

  constructor(private http: HttpClient) { }



  // Get EMployees from Backend
  getEmployees(): Observable<Employee[]> {
    return this.http.get<Employee[]>(this.employeesUrl + '/employees')
      .pipe(
        catchError(this.handleError<Employee[]>('getEmployee', []))
      );
  }


  /** PUT: update the hero on the server */
  updateEmployee(employee: Employee): Observable<any> {
    return this.http.put(this.employeesUrl + '/updateEmployee', employee, httpOptions).pipe(
      catchError(this.handleError<any>('updateEmployee'))
    );
  }


  /** POST: add a new hero to the server */
  addEmployee(employee: Employee): Observable<Employee> {
    return this.http.post<Employee>(this.employeesUrl + '/addEmployee', employee, httpOptions).pipe(
      catchError(this.handleError<Employee>('addHero'))
    );
  }

  // Delete employee , i am suffring my project was accedentaly deleted , ples cry with me
  deleteEmployee(employee: Employee | number): Observable<Employee> {
    const id = typeof employee === 'number' ? employee : employee.idEmployee;
    const url = `${this.employeesUrl}/employee/${id}`;

    return this.http.delete<Employee>(url, httpOptions).pipe(
      catchError(this.handleError<Employee>('deletEmoloyee'))
    );
  }


  /* GET heroes whose name contains search term */
  searchEmployees(term: string): Observable<Employee[]> {
    if (!term.trim()) {
      // if not search term, return empty hero array.
      return of([]);
    }
    return this.http.get<Employee[]>(`${this.employeesUrl}/search/?term=${term}`).pipe(
      catchError(this.handleError<Employee[]>('searchEmployee', []))
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
