import { Component, OnInit, Input } from '@angular/core';
import { Product } from 'src/app/models/product.model';
import { MessengerService } from 'src/app/services/messenger.service';
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  @Input() currentProduct: Product = {}
  cartItems = [
    
  ];


  cartTotal = 0;

  constructor(private msg: MessengerService) { }

  ngOnInit() {
   
       this.msg.getMsg().subscribe((product: Product) => {
        console.log(product)
        //let x = {productName: product.product_name, price: product.price}
        this.cartItems.push({
          productName: product.product_name,
          qty: 1,
          price: product.price
        })

        this.cartTotal = 0;
        this.cartItems.forEach(item => {
          this.cartTotal += (item.qty * item.price)
        })

    })

    
  }
}