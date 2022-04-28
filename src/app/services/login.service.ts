import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Login } from '../models/login.model';

const baseUrl = 'http://localhost:5000/api/v1/user/';
const baseUrl2 = 'http://localhost:5000/api/v1/login'


@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }

  create(data: any): Observable<any> {
  return this.http.post(baseUrl, data);
  }

  getAll(): Observable<Login[]> {
    return this.http.get<Login[]>(baseUrl);
  }

  check(data: any): Observable<any> {
    return this.http.post(baseUrl2, data);

  }


}