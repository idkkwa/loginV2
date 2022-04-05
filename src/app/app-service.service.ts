import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {url} from './constants';

@Injectable({
    providedIn: 'root'
})
export class AppServiceService {
  constructor(private http: HttpClient) { }

  public getBackendData() : Observable<Object>{
      return this.http.get(url);
  }
}