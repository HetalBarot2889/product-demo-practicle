import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable, of, BehaviorSubject, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

const baseUrl = 'http://localhost:5000';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  getAllUrl = `${baseUrl}/getProducts`;

  constructor(private http: HttpClient) { }
  handleError(error: any) {
    return throwError(error.message || "Server Error")
  }

  getAll(): Observable<HttpResponse<any>> {
    return this.http.get<any>(`${this.getAllUrl}`, { observe: 'response' })
      .pipe(catchError(this.handleError))
  }

}
