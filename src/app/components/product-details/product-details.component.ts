import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product.model';
import { ProductService } from 'src/app/services/product.service';
import { ActivatedRoute, Router } from '@angular/router';
// import { FormControl, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  
  currentProduct: Product = {
    id: this.route.snapshot.params.id,
    product_name: '',
    brand_name: '',
    price: 0,
    product_color: '',
    storage: '',
    product_description: '',
    //published: false
  };

  message = '';
  
  constructor(
    private productService: ProductService,
    private route: ActivatedRoute,
    private router: Router) { }
    
  ngOnInit(): void {
    this.message = '';
    this.getProduct(this.route.snapshot.paramMap.get('id'));
    console.log("The ID is: ",this.route.snapshot.paramMap.get('id'))
    console.log("The other way to get ID:",this.route.snapshot.params.id)
  }

  getProduct(id: any): void {
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

  // updatePublished(status: boolean): void {
  //   const data = {
  //     product_name: this.currentProduct.product_name,
  //     brand_name: this.currentProduct.brand_name,
  //     price: this.currentProduct.price,
  //     product_color: this.currentProduct.product_color,
  //     storage: this.currentProduct.storage,
  //     product_description: this.currentProduct.product_description,
  //     published: status
  //   };

  //   this.productService.update(this.route.snapshot.params.id, data)
  //     .subscribe(
  //       response => {
  //         this.currentProduct.published = status;
  //         console.log(response);
  //         this.message = response.message ? response.message : 'The status was updated successfully!';
  //       },
  //       error => {
  //         console.log(error);
  //       });
  // }

  updateProduct(): void {
    const data = {
      product_name: this.currentProduct.product_name,
      brand_name: this.currentProduct.brand_name,
      price: this.currentProduct.price,
      product_color: this.currentProduct.product_color,
      storage: this.currentProduct.storage,
      product_description: this.currentProduct.product_description,
    }

    this.message = '';
    this.productService.update(this.route.snapshot.paramMap.get('id'), data)
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
    this.productService.delete(this.route.snapshot.paramMap.get('id'))
      .subscribe(
        response => {
          console.log(response);
          this.router.navigate(['/products']);
        },
        error => {
          console.log(error);
        });
  }

}