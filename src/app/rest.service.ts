import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, catchError, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class RestService {

  constructor(private http: HttpClient) { }
  
  private extractData(res: Response) {
    let body = res;
    return body || { };
  }

  getPersons(): Observable<any> {
    return this.http.get(endpoint + 'persons', httpOptions).pipe(
      map(this.extractData));
  }
  
  getPerson(id): Observable<any> {
    return this.http.get(endpoint + 'persons/' + id).pipe(
      map(this.extractData));
  }
  
  addPerson (person): Observable<any> {
    console.log(person);
    return this.http.post<any>(endpoint + 'persons/', JSON.stringify(person), httpOptions).pipe(
      tap((person) => console.log(`added person w/ id=${person.id}`)),
      catchError(this.handleError<any>('addPerson'))
    );
  }
  
  updatePerson (id, person): Observable<any> {
    return this.http.put(endpoint + 'persons/' + id, JSON.stringify(person), httpOptions).pipe(
      tap(_ => console.log(`updated person id=${id}`)),
      catchError(this.handleError<any>('updatePerson'))
    );
  }
  
  deletePerson (id): Observable<any> {
    return this.http.delete<any>(endpoint + 'persons/' + id, httpOptions).pipe(
      tap(_ => console.log(`deleted person id=${id}`)),
      catchError(this.handleError<any>('deletePerson'))
    );
  }
  
  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
  
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead
  
      // TODO: better job of transforming error for user consumption
      console.log(`${operation} failed: ${error.message}`);
  
      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}

const endpoint = 'http://127.0.0.1:8000/';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json'
  })
};
