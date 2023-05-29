import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { initializeApp } from 'firebase/app';
import { getAuth, signInWithPopup, GoogleAuthProvider, getAdditionalUserInfo, signOut } from "firebase/auth";
import { ToastrService } from 'ngx-toastr';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isLogedIn = false;
  displayName?: String | null;
  userUID?: String;
  isAdmin = false;

  constructor(private router: Router , private toastr : ToastrService) { }

//sign in with google
  async signInWithGoogle(): Promise<void> {
    const app = initializeApp(environment.firebase);
    const auth = getAuth();
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
      .then((result) => {
        this.isLogedIn = true
        const credential = GoogleAuthProvider.credentialFromResult(result);
        this.toastr.success('You Logged In Sucessfully','Success' ,{positionClass:'toast-bottom-right'});
       // console.log(getAdditionalUserInfo(result));
        const user = result.user;
        this.userUID = user.uid;
        this.displayName = user.displayName;
        console.log(this.userUID);
        if (getAdditionalUserInfo(result)?.isNewUser) {
          this.router.navigate(['signup']);
        }

        if (this.userUID === 'knDGIPt4MgSBitg7taT4W9zFJK73') {
          this.isAdmin = true;
        }

      }
      )
      .catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.customData.email;
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error);
        this.toastr.error("Unable to Login")
        // ...
      }
      )
  }

  logout() {
    const app = initializeApp(environment.firebase);
    const auth = getAuth();
    const provider = new GoogleAuthProvider();
    signOut(auth)
    .then(() => {
      this.isLogedIn = false;
      this.isAdmin = false;
      console.log('signned Out')
      this.router.navigate([''])
    })
    .catch((Error) => console.log(Error));

  }
}
