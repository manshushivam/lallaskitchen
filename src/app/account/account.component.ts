import { Component } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent {
  constructor(private auth : AuthService){}

  get displayName (){
    return this.auth.displayName;
  }

  logout(){
    this.auth.logout();
  }
}
