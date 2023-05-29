import { Injectable, inject } from '@angular/core';
import { Firestore, collection, addDoc, doc, getDocs,deleteDoc  } from '@angular/fire/firestore';
import { initializeApp } from 'firebase/app';
import { getDoc, getFirestore, serverTimestamp, setDoc } from 'firebase/firestore';
import { environment } from 'src/environments/environment';
import { AuthService } from './auth.service';
import { getStorage, ref, uploadBytes } from "firebase/storage";
import { timestamp } from 'rxjs';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';



@Injectable({
  providedIn: 'root'
})
export class CrudService {
  firestore: Firestore = inject(Firestore);
  constructor(private auth: AuthService, private router: Router, private toaster:ToastrService) { 
  
  }
  Items: any[] = [];
  Orders: any[] = [];

  get cust_name() {
    return this.auth.displayName;
  }
  get cust_uid() {
    return this.auth.userUID;
  }
  checkOut(cartItemss: any[], totalPrice: number) {
    if (! (this.cust_name == null)) {

      const oder = {
        time: serverTimestamp(),
        custId: this.auth.userUID,
        totalPrice: totalPrice,
        dishes: cartItemss.map(item => ({
          DishId: item.id,
          DishName: item.name,
          DishQty: item.quantity,
          Dishprice: item.price
        }))
      };
      

      const app = initializeApp(environment.firebase);
      const db = getFirestore(app);
      try {
        const docRef = addDoc(collection(db, "Order"), { oder }).then(() => alert("Your Order has been placed"))
        console.log("Document written with ID: ", docRef);
      } catch (e) {
        console.error("Error adding document: ", e);
      }
      
    }else{
      
      this.toaster.warning('Login Required');
      this.auth.signInWithGoogle();
    }

  }

  uploadNewItem(category?: string, name?: String, description?: string, status?:string, price?: number, image?: string) {

    // console.log("from curd");
    const app = initializeApp(environment.firebase);
    const db = getFirestore(app);
    try {
      const docRef = addDoc(collection(db, "Items"), { category, name, description,status, price, image });
      console.log("Item added to database: ", docRef);
      this.toaster.success("Items added to Database");
    } catch (e) {
      this.toaster.error("Some Error Faced");
      console.error("Error adding document: ", e);
    }
  }

  async readItems() {
    this.Items= [];
    const app = initializeApp(environment.firebase);
    const db = getFirestore(app);

    const querySnapshot = await getDocs(collection(db, "Items"));
    querySnapshot.forEach((doc) => {
      const item = { ...doc.data(), id: doc.id }; // Add 'id' property with the document ID
      this.Items?.push(item);
    });

  }

  async deleteItems(docId: string){
    const app = initializeApp(environment.firebase);
    const db = getFirestore(app);
    await deleteDoc(doc(db, "Items", docId))
    .then(()=>{
            console.log("Item Deleted from Document"),
            this.toaster.success('Item Deleted');

    });
  }

  async inactiveItem(item:any){
    const app = initializeApp(environment.firebase);
    const db = getFirestore(app);
    item.status = "Inactive";
    await setDoc(doc(db, 'Items', item.id),{
      category:item.category,
      name :item.name,
      description: item.description,
      price:item.price,
      status:item.status,
      image:item.image
    
    })
    .then(()=>this.toaster.success('Inavtivated'), item.name);
  }

  async activeItem(item:any){
    const app = initializeApp(environment.firebase);
    const db = getFirestore(app);
    item.status = "Active";
    await setDoc(doc(db, 'Items', item.id),{
      category:item.category,
      name :item.name,
      description: item.description,
      price:item.price,
      status:item.status,
      image:item.image
    
    })
    .then(()=>this.toaster.success('avtivated'), item.name);
  }

  async order() {
    const app = initializeApp(environment.firebase);
    const db = getFirestore(app);

    const querySnapshot = await getDocs(collection(db, "Order"));
    querySnapshot.forEach((doc) => {
      const order = { ...doc.data(), id: doc.id }; // Add 'id' property with the document ID
      this.Orders?.push(order);
    });
  }



}


