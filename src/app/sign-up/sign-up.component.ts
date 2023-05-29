import { Component } from '@angular/core';
import { CrudService } from '../services/crud.service';
import { Router } from '@angular/router';
import { Firestore, collection, addDoc, doc, getDocs, setDoc } from '@angular/fire/firestore';
import { initializeApp } from 'firebase/app';
import { getDoc, getFirestore, serverTimestamp } from 'firebase/firestore';
import { environment } from 'src/environments/environment';
import { AuthService } from '../services/auth.service';




@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent {
 
  mobile?: number;
  Address?: string;
  constructor(private crud: CrudService, private router: Router , private auth : AuthService) { }


  submit() {
    this.addNewUserInfo();
  }
  async addNewUserInfo(mobile?: number, Address?: string) {
    const app = initializeApp(environment.firebase);
    const db = getFirestore(app);
    
    const uid: string = this.auth.userUID as string;
    const cust= {
    Cust_ID :  this.auth.userUID ,
     Cust_Name: this.auth.displayName,
    Cust_MobileNO: this.mobile,
    Cust_Address: this.Address,
  }
  
   const userDocRef  = await setDoc(doc(db, 'Customer', uid),{ cust}).then(()=> this.router.navigate([''])).catch(()=>{alert('error')});
   }
  
}

