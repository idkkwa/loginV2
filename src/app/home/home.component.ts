import { Component, Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

const baseURL = 'http://localhost:5000/api/v1/products';

@Injectable({
  providedIn: 'root'
})

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {
fruits: string[]= ["Apple", "Grapes","Orange"]

  constructor(private http:HttpClient) { }

  getAllProducts(): Observable<any> {
    return this.http.get(baseURL);
  }

  ngOnInit(): void {
  }

}
