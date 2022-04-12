import { Injectable } from '@angular/core';
import { Login } from '../models/login.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

const baseUrl = 'http://localhost:5000/api/v1/user/';


@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }

  create(data: any): Observable<any> {
  return this.http.post(baseUrl, data);
  }
}