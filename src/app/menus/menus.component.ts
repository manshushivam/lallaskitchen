import { CurrencyPipe } from '@angular/common';
import { Component } from '@angular/core';
import { CrudService } from '../services/crud.service';

@Component({
  selector: 'app-menus',
  templateUrl: './menus.component.html',
  styleUrls: ['./menus.component.css']
})
export class MenusComponent {
  constructor(private crud : CrudService){
    this.crud.readItems();
  }
}


