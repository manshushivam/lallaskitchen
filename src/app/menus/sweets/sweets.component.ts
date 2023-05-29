import { Component } from '@angular/core';
import { CrudService } from 'src/app/services/crud.service';

@Component({
  selector: 'app-sweets',
  templateUrl: './sweets.component.html',
  styleUrls: ['./sweets.component.css']
})
export class SweetsComponent {
  constructor(private crud : CrudService){}

  sweets = this.crud.Items
  .filter(item => item.category === 'sweets' && item.status === 'Active')
  .map(item => ({ ...item, quantity: 0 }));


  // sweets = [
  //   {
  //     img: 'assets/Food Images/Sweets/Special Rasmalai.jpg',
  //     name: 'Special Rasmalai',
  //     description: 'RAS with MALAI',
  //     price: 10.0,
  //     quantity:0
  //   },
  //   {
  //     img: 'assets/Food Images/Sweets/Angoori Rasmalai.jpg',
  //     name: 'Angoori Rasmalai',
  //     description: 'Angoooooori RAS and malaaaai',
  //     price: 20.0,
  //     quantity:0
  //   },
  //   {
  //     img: 'assets/Food Images/Sweets/Angoori Rasmalai 2.jpg',
  //     name: 'Angoori Rasmalai 2.0',
  //     description: 'ye to aur yummy hai',
  //     price: 25.0,
  //     quantity:0
  //   },
  //   {
  //     img: 'assets/Food Images/Sweets/Festival Special.jpg',
  //     name: 'Festival Special',
  //     description: 'Itnaaaa sara mithaaiiiii',
  //     price: 20.0,
  //     quantity:0
  //   },  
  //   {
  //     img: '/assets/Food Images/Sweets/Sweets Gift Pack.jpg',
  //     name: 'Gift',
  //     description: 'ye to main gift dunga',
  //     price: 200.0,
  //     quantity:0
  //   },  
  //   // Add more items as needed
  // ];
}
