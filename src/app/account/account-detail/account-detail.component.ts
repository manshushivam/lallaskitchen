import { Component } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { CrudService } from 'src/app/services/crud.service';
import { ToastrService } from 'ngx-toastr';
import { getDownloadURL, getStorage, ref, uploadBytes } from "firebase/storage";
import { doc, getDoc, getFirestore, serverTimestamp, setDoc } from 'firebase/firestore';
import { initializeApp } from 'firebase/app';
import { environment } from 'src/environments/environment';



@Component({
  selector: 'app-account-detail',
  templateUrl: './account-detail.component.html',
  styleUrls: ['./account-detail.component.css']
})
export class AccountDetailComponent {

  showUpdateForm = false;
  name?: string;
  mobile?: string;
  address?: string;
  accountHolder?: any = null;

  uid?: any;

  constructor(private auth: AuthService , private toastr: ToastrService) {

    this.uid = this.auth.userUID;
    this.showCustomerDetails(this.uid);
  }



  toggleUpdateForm() {
    this.showUpdateForm = true;
  }

  async showCustomerDetails(userUID: String) {
    const app = initializeApp(environment.firebase);
    const db = getFirestore(app);

    
    const uid: string = this.auth.userUID as string;
 //   console.log(uid);
    const docRef = doc(db, "Customer", uid);
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      this.accountHolder = null;
      this.accountHolder = docSnap.data();
      console.log(this.accountHolder);
    } else {
      console.log("No such Customer");
    }
  }

  async updateAccount() {
    const app = initializeApp(environment.firebase);
    const db = getFirestore(app);

    const uid: string = this.auth.userUID as string;
    const cust = {
      Cust_ID: this.auth.userUID,
      Cust_Name: this.auth.displayName,
      Cust_MobileNO: this.mobile,
      Cust_Address: this.address,
    }


    const userDocRef = await setDoc(doc(db, 'Customer', uid), { cust })
      .then(() => this.toastr.success(  'Login again to see Changes', "Updated Sucesscfully" ,{positionClass : 'toast-bottom-right' }))
      .catch(() => { this.toastr.error('Failed to Login') });
  }






}
