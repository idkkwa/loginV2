import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Product } from 'src/app/models/product.model';
import { ProductService } from 'src/app/services/product.service';
import { ActivatedRoute, Router } from '@angular/router';
import { MessengerService } from 'src/app/services/messenger.service';

@Component({
  selector: 'app-product-info',
  templateUrl: './product-info.component.html',
  styleUrls: ['./product-info.component.css']
})
// export class ProductInfoComponent implements OnInit {

//   message = '';

//   constructor(private productService: ProductService,
//     private route: ActivatedRoute,
//     private router: Router) { }

//   ngOnInit(): void {
//     this.message = '';
//     //this.getProduct(this.route.snapshot.params.id);
//   }

//   // getProduct(id: any): void {
//   //   this.productService.get(id)
//   //     .subscribe(
//   //       data => {
//   //         this.currentProduct = data;
//   //         console.log(data);
//   //       },
//   //       error => {
//   //         console.log(error);
//   //       });
//   // }


//   name = new FormControl('');

//   profileForm = new FormGroup({
//     productName: new FormControl(''),
//     brandName: new FormControl(''),
//     price: new FormControl(''),
//     productColor: new FormControl(''),
//     storage: new FormControl(''),
//     productDescription: new FormControl(''),
//   });


//     productName = new FormControl('')
//     brandName = new FormControl('')
//     price = new FormControl('')
//     productColor = new FormControl('')
//     storage = new FormControl('')
//     productDescription = new FormControl('')

//   currentProduct: Product = {
//     id: 26,
//     product_name: '',
//     brand_name: '',
//     price: '',
//     product_color: '',
//     storage: '',
//     product_description: '',
//     published: false
//   };



//   onSubmit() {
//     // TODO: Use EventEmitter with form value
//     console.warn(this.profileForm.value);
//     this.productName.setValue(this.currentProduct.product_name)
//   }

//   updateName() {
//     this.name.setValue(this.currentProduct);
//   }

//   updateProduct(): void {
//     this.message = '';
//     this.productService.update(this.currentProduct.id, this.currentProduct)
//       .subscribe(
//         response => {
//           console.log(response);
//           this.message = response.message ? response.message : 'This product was updated successfully!';
//         },
//         error => {
//           console.log(error);
//         });
//   }

// }


export class ProductInfoComponent implements OnInit {
public searchFilter: any = '';
  query: any
  products?: Product[];
  currentIndex = -1;
  product_name = '';

  @Input() currentProduct: Product = {}; 

  
  constructor(private msg: MessengerService) { }
  
  ngOnInit() {}

    handleAddToCart(){
      this.msg.sendMsg(this.currentProduct)
    }
    // retrieveProducts(): void {
    //   this.productService.getAll()
    //     .subscribe(
    //       data => {
    //         this.products = data;
    //         console.log(data);
    //       },
    //       error => {
    //         console.log(error);
    //       });
    // }
    // refreshList(): void {
    //   this.retrieveProducts();
    //   this.currentProduct = {};
    //   this.currentIndex = -1;
    // }

    // setActiveProducts(product: Product, index: number): void {
    //   this.currentProduct = product;
    //   this.currentIndex = index;
    // }
}
