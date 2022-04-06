import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../models/product.model';



const baseUrl = 'http://localhost:5000/api/v1/products/';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<Product[]> {
    return this.http.get<Product[]>(baseUrl);
  }
  get(id: any): Observable<Product> {
    return this.http.get(`${baseUrl}/${id}`);
  }
}
