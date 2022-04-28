import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product.model';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {
  product: Product = {
    product_name: '',
    brand_name: '',
    price: 0,
    product_color: '',
    storage: '',
    product_description: '',
    //published: false
  };

  submitted = false;
  constructor(private productService: ProductService) { }
  ngOnInit(): void {}

  saveProduct(): void {
    const data = {
      product_name: this.product.product_name,
      brand_name: this.product.brand_name,
      price: this.product.price,
      product_color: this.product.product_color,
      storage: this.product.storage,
      product_description: this.product.product_description
    };

    this.productService.create(data)
    .subscribe(
      response => {
        console.log(response);
        this.submitted = true;
      },
      error => {
        console.log(error);
      });
  }

    newProduct(): void {
      this.submitted = false;
      this.product = {
        product_name: '',
        brand_name: '',
        price: 0,
        product_color: '',
        storage: '',
        product_description: '',
        qty: 1
        //published: false
      };
    }
}

