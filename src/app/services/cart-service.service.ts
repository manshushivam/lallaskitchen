import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class CartServiceService {

  constructor(private toastr: ToastrService){}

  cartItems:any = [];
  cartItemsNo : number = 0;

  addToCart(item:any) {
    this.cartItems.push(item);
    this.cartItemsNo++;
    this.toastr.success('added to cart' , item.name ,{positionClass:'toast-bottom-right'});
  //  console.log(item);

  }

  removeFromCart(item:any) {
    const index = this.cartItems.indexOf(item);
    if (index > -1) {
      this.cartItems.splice(index, 1);
    }
  }

  getCartItems() {
    return this.cartItems;
  }
}
