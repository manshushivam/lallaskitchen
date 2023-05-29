import { Component , OnInit, HostListener} from '@angular/core';
import { CartServiceService } from '../services/cart-service.service';
import { AuthService } from '../services/auth.service';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import firebase from 'firebase/compat/app';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  public showLinks: boolean = false;

  // Function to toggle visibility of links
  public toggleLinks() {
    this.showLinks = !this.showLinks;
  }

  constructor(private afAuth : AuthService , private cart : CartServiceService){}

  get isLogedIn(){
    return this.afAuth.isLogedIn;
  }
  get cartItemsNo(){
    return this.cart.cartItemsNo;
  }
  get isAdmin(){
    return this.afAuth.isAdmin;
  }

  signInWithGoogle() {
    this.afAuth.signInWithGoogle()
      .then((result) => {
        // Handle successful sign-in here
      })
      .catch((error) => {
        // Handle sign-in error here
      });
  }
}
