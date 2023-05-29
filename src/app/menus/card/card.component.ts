import { Component, Input } from '@angular/core';
import { CartServiceService } from 'src/app/services/cart-service.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent { 

  @Input() item:any;
  @Input() items?: any[];

  constructor(private cartService: CartServiceService) {}

  addToCart(item: any) {
    // Check if the item has already been added to the cart
    if (!this.cartService.cartItems.includes(item)){
      // Add the item to the cart and disable the button
      this.cartService.addToCart(item);
      item.disabled = true;
     
      if(item.quantity == 0){
        this.increaseQuantity(item);
      }
      //console.log('Item added to cart');
    }
  }


  decreaseQuantity(card: any) {
    if (card.quantity > 0) {
      card.quantity--;
    }  
  }

  increaseQuantity(card: any) {
    card.quantity++;
  }



  
 
}
