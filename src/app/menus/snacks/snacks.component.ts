import { Component } from '@angular/core';
import { CrudService } from 'src/app/services/crud.service';

@Component({
  selector: 'app-snacks',
  templateUrl: './snacks.component.html',
  styleUrls: ['./snacks.component.css']
})
export class SnacksComponent {

  constructor(private crud : CrudService){}
  
  snacks =  this.crud.Items
  .filter(item => item.category === 'snacks' && item.status === 'Active')
  .map(item => ({ ...item, quantity: 0 }));


  // <img src="/src/assets/Food Images/Snacks/Bhelpuri.jpg" alt="">
  // <img src="/src/assets/Food Images/Snacks/Club Sandwich with French Fries.jpg" alt="">
  // <img src="/src/assets/Food Images/Snacks/Crispy French Fries.jpg" alt="">
  // <img src="/src/assets/Food Images/Snacks/Dal Pakoda with Green Chatni.jpg" alt="">
  // <img src="/src/assets/Food Images/Snacks/Deep Fried Spring Rolls.jpg" alt="">
  // <img src="/src/assets/Food Images/Snacks/Evening Platter.jpg" alt="">
  // <img src="/src/assets/Food Images/Snacks/Hakka Noodles with Paneer.jpg" alt="">
  // <img src="/src/assets/Food Images/Snacks/Hakka Noodles.jpg" alt="">
  // <img src="/src/assets/Food Images/Snacks/Khasta Kachouri Special.jpg" alt="">
  // <img src="/src/assets/Food Images/Snacks/Khasta Kachouri.jpg" alt="">
  // <img src="/src/assets/Food Images/Snacks/Lalla's Veg Cheese kathi Roll.jpg" alt="">
  // <img src="/src/assets/Food Images/Snacks/Maggie Masala Special.jpg" alt="">
  // <img src="/src/assets/Food Images/Snacks/Paneer Tikka With Green Chatni.jpg" alt="">
  // <img src="/src/assets/Food Images/Snacks/Pao Bhaji Masala.jpg" alt="">
  // <img src="/src/assets/Food Images/Snacks/Plain Masala Noodles.jpg" alt="">
  // <img src="/src/assets/Food Images/Snacks/Potato Stuffed Spring Roll.jpg" alt="">
  // <img src="/src/assets/Food Images/Snacks/Receipe 4 - Sattu Parantha With Curd.jpg" alt="">
  // <img src="/src/assets/Food Images/Snacks/Sabudana Vada.jpg" alt="">
  // <img src="/src/assets/Food Images/Snacks/Schezwan Noodles 2.jpg" alt="">
  // <img src="/src/assets/Food Images/Snacks/Schezwan Noodles.jpg" alt="">
  // <img src="/src/assets/Food Images/Snacks/Shawarma Veg Roll.jpg" alt="">
  // <img src="/src/assets/Food Images/Snacks/Special Chole Bhature.jpg" alt="">
  // <img src="/src/assets/Food Images/Snacks/Special Paneer Roll.jpg" alt="">
  // <img src="/src/assets/Food Images/Snacks/Vegetable Maggie.jpg" alt="">
  // <img src="/src/assets/Food Images/Snacks/Vegetable Pasta.jpg" alt="">


  // snacks = [
  //   {
  //     img: 'assets/Food Images/Roti/Chapati - Tava Roti.jpg',
  //     name: 'Tava Rotiiiii',
  //     description: 'Kya mast roti hai',
  //     price: 10.0,
  //     quantity:0
  //   },
  //   {
  //     img: 'assets/Food Images/Roti/Garlic Naan.jpg',
  //     name: 'Garlic Naan',
  //     description: 'arrre ye to garlic ka naan hai ...gajjab naan hai',
  //     price: 20.0,
  //     quantity:0
  //   },
  //   {
  //     img: 'assets/Food Images/Roti/Corn Stuffed Parantha.jpg',
  //     name: 'Corn Stuffed Parantha',
  //     description: 'corn ko roti me daal diya re baba',
  //     price: 20.0,
  //     quantity:0
  //   },
  // ]
}
