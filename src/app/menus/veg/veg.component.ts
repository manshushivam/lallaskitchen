import { Component } from '@angular/core';
import { CrudService } from 'src/app/services/crud.service';

@Component({
  selector: 'app-veg',
  templateUrl: './veg.component.html',
  styleUrls: ['./veg.component.css']
})
export class VegComponent {
  constructor(private crud : CrudService){}
  veg = this.crud.Items
  .filter(item => item.category === 'veg' && item.status === 'Active')
  .map(item => ({ ...item, quantity: 0 }));

}
