import { Component, OnInit, Input } from '@angular/core';
import { Product } from 'src/app/models/product.model';
import { MessengerService } from 'src/app/services/messenger.service';
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  cartItems: Product[] | any


  cartTotal = 0;

  constructor(private msg: MessengerService) { }

  ngOnInit() {
   
       this.msg.getMsg().subscribe((product: Product) => {
        this.addProductToCart(product)
        //console.log(product)
    })

    
  }

  addProductToCart(product: Product){

    for( let i in this.cartItems){
      if(this.cartItems[i].productName === product.product_name){
        this.cartItems[i].qty++
      }

      else{
        this.cartItems.push({
          productName: product.product_name,
          qty: 1,
          price: product.price
        })
      }
    }



    this.cartTotal = 0;
    this.cartItems.forEach((item: { qty: number; price: number; }) => {
      this.cartTotal += (item.qty * item.price)
    })
  }
}