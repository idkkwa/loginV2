import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {url} from './constants';

@Injectable({
  providedIn: 'root'
})
export class LoginServiceService {

  constructor(private http: HttpClient) { }

  getAll() {
    return this.http.get("http://localhost:5000/api/v1/products/");
  }

  public getBackendData() : Observable<Object>{
      return this.http.get(url);
  }

  public getProductBackendData() : Observable<Object>{
    return this.http.get('http://localhost:5000/api/v1/products/');
}
}
