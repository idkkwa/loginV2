import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product.model';
import { ProductService } from 'src/app/services/product.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  
  currentProduct: Product = {
    product_name: '',
    brand_name: '',
    price: '',
    product_color: '',
    storage: '',
    product_description: '',
    published: false
  };

  message = '';
  constructor(
    private productService: ProductService,
    private route: ActivatedRoute,
    private router: Router) { }
    
  ngOnInit(): void {
    this.message = '';
    this.getProduct(this.route.snapshot.params.id);
  }

  getProduct(id: string): void {
    this.productService.get(id)
      .subscribe(
        data => {
          this.currentProduct = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }

  updatePublished(status: boolean): void {
    const data = {
      product_name: this.currentProduct.product_name,
      brand_name: this.currentProduct.brand_name,
      price: this.currentProduct.price,
      product_color: this.currentProduct.product_color,
      storage: this.currentProduct.storage,
      product_description: this.currentProduct.product_description,
      published: status
    };

    this.message = '';
    this.productService.update(this.currentProduct.id, data)
      .subscribe(
        response => {
          this.currentProduct.published = status;
          console.log(response);
          this.message = response.message ? response.message : 'The status was updated successfully!';
        },
        error => {
          console.log(error);
        });
  }

  updateProduct(): void {
    this.message = '';
    this.productService.update(this.currentProduct.id, this.currentProduct)
      .subscribe(
        response => {
          console.log(response);
          this.message = response.message ? response.message : 'This product was updated successfully!';
        },
        error => {
          console.log(error);
        });
  }

  deleteProduct(): void {
    this.productService.delete(this.currentProduct.id)
      .subscribe(
        response => {
          console.log(response);
          this.router.navigate(['/products']);
        },
        error => {
          console.log(error);
        });
  }


  // currentProduct: Product = {
  //   product_name: '',
  //   brand_name: '',
  //   price: '',
  //   product_color: '',
  //   storage: '',
  //   product_description: '',
  //   published: false
  // };

  //   ngOnInit(): void {}

  // productForm = new FormGroup({
  //   productName: new FormControl('', Validators.required),
  //   brandName: new FormControl('', Validators.required),
  //   price: new FormControl(this.currentProduct.price),
  // });

  // get productName(): any {
  //   return this.productForm.get('productName');
  // }

  // get brandName(): any {
  //   return this.productForm.get('brandName');
  // }

  // get price(): any {
  //   return this.productForm.get('price');
  // }
  // onFormSubmit(): void {
  // console.log('Product Name:' + this.productForm.get('productName').value);
  // console.log('Brand Name:' + this.productForm.get('brandName').value);
  // console.log('Price:' + this.productForm.get('price').value);
  // }
}