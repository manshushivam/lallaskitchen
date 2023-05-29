import { Component } from '@angular/core';
import { CrudService } from '../services/crud.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  constructor(private crud : CrudService){
    this.crud.readItems();
  }
     heading1 :string = 'Fresh flavors, \n delivered to your door';
}
