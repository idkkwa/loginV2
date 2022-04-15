import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Product } from 'src/app/models/product.model';
import { ProductService } from 'src/app/services/product.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-product-info',
  templateUrl: './product-info.component.html',
  styleUrls: ['./product-info.component.css']
})
export class ProductInfoComponent implements OnInit {

  message = '';

  constructor(private productService: ProductService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.message = '';
    //this.getProduct(this.route.snapshot.params.id);
  }

  // getProduct(id: any): void {
  //   this.productService.get(id)
  //     .subscribe(
  //       data => {
  //         this.currentProduct = data;
  //         console.log(data);
  //       },
  //       error => {
  //         console.log(error);
  //       });
  // }

  currentProduct: Product = {
    id: '',
    product_name: '',
    brand_name: '',
    price: '',
    product_color: '',
    storage: '',
    product_description: '',
    published: false
  };

  name = new FormControl('');

  profileForm = new FormGroup({
    brandName: new FormControl(''),
    productName: new FormControl(''),
    price: new FormControl(''),
    productColor: new FormControl(''),
    storage: new FormControl(''),
    productDescription: new FormControl(''),
  });

  onSubmit() {
    // TODO: Use EventEmitter with form value
    console.warn(this.profileForm.value);
  }

  updateName() {
    this.name.setValue("Hey");
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

}