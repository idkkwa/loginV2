import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product.model';
import { MessengerService } from 'src/app/services/messenger.service';
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  cartItems = [
    // {id: 29, productId: 1, productName:'Test 1', qty: 3, price: 100},
    // {id: 30, productId: 2, productName:'Test 2', qty: 2, price: 100},
    // {id: 31, productId: 3, productName:'Test 3', qty: 1, price: 100},
    // {id: 32, productId: 4, productName:'Test 4', qty: 4, price: 100},
  ];


  cartTotal = 0;

  constructor(private msg: MessengerService) { }

  ngOnInit() {
    this.msg.getMsg().subscribe(product => {
      //this.addProductToCart(product)
      console.log(product)
    })
   
  }

  addProductToCart(product: Product) {

    for(let i in this.cartItems){
      if(this.cartItems[i].product_name === product.product_name){

      }
    }
    
    this.cartItems.push({
      productName: product.product_name,
      qty: 3,
      price: product.price
     })


      this.cartTotal = 0
      this.cartItems.forEach(item => {
        this.cartTotal += (item.qty * item.price)
      })
  
   }




}