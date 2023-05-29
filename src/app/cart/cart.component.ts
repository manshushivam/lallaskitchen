import { Component } from '@angular/core';
import { CartServiceService } from '../services/cart-service.service';
import { CrudService } from '../services/crud.service';



@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {

  cartItemss:any[];
  arrayLength :number = 0;

  
  constructor(private cartService: CartServiceService , private crud : CrudService ) {
    this.cartItemss = this.cartService.getCartItems();
    this.arrayLength = this.cartItemss.length;
    
  }

  removeFromCart(item: any) {
    const index = this.cartItemss.indexOf(item);
    if (index > -1) {
      this.cartItemss.splice(index, 1);
    }
  }

  decreaseQuantity(item: any) {
    if (item.quantity > 1) {
      item.quantity--;
    } else {
      this.removeFromCart(item);
    }
  }

  increaseQuantity(item: any) {
    item.quantity++;
  }

  getSubtotal() {
    return this.cartItemss.reduce((acc:number, item:any) => acc + item.quantity * item.price, 0);
  }

  checkout() {
    this.crud.checkOut(this.cartItemss, this.getSubtotal());
  }
}
