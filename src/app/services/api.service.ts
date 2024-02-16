import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  apiUrl = "https://jsonplaceholder.typicode.com/photos";
  userDetails: any;

  constructor(private http: HttpClient) { }

  getData(query:any):Observable<any> {
    return this.http.get(`${this.apiUrl}?_start=${query._start}&_limit=${query._limit}`)
  }

  getProductId(id:any):Observable<any> {
    return this.http.get(`${this.apiUrl}/${id}`)
  }

}
