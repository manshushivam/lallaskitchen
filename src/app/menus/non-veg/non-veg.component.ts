import { Component } from '@angular/core';
import { CrudService } from 'src/app/services/crud.service';

// import { RestAPIService } from './services/rest-api.service';

@Component({
  selector: 'app-non-veg',
  templateUrl: './non-veg.component.html',
  styleUrls: ['./non-veg.component.css']
})
export class NonVegComponent {

  constructor(private crud : CrudService){}

  nonVeg = this.crud.Items
  .filter(item => item.category === 'nonVeg' && item.status === 'Active')
  .map(item => ({ ...item, quantity: 0 }));


}
