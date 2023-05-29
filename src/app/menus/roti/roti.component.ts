import { Component } from '@angular/core';
import { CrudService } from 'src/app/services/crud.service';

@Component({
  selector: 'app-roti',
  templateUrl: './roti.component.html',
  styleUrls: ['./roti.component.css']
})
export class RotiComponent {
  constructor(private crud : CrudService){}
  
  
  roti = this.crud.Items
  .filter(item => item.category === 'roti' && item.status === 'Active')
  .map(item => ({ ...item, quantity: 0 }));


  // roti = [
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
 
  //   // Add more items as needed
  // ];


}
