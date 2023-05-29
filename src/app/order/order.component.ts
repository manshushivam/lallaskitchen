import { Component } from '@angular/core';
import { CrudService } from '../services/crud.service';
import { Firestore, collection, addDoc, doc, getDocs } from '@angular/fire/firestore';
import { initializeApp } from 'firebase/app';
import { getDoc, getFirestore, serverTimestamp } from 'firebase/firestore';
import { environment } from 'src/environments/environment';
import { getStorage, ref, uploadBytes } from "firebase/storage";
import { timestamp } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent {

  orders: any[] = [];
  selectedOrder: any = null;
  customerDetails: any = null;
  // orderid: any[] = [];
  orderItems?:any ;

  constructor(private crud: CrudService) {
    this.fetchOrders();
    console.log(this.orders);
  
  }

  async fetchOrders() {
    const app = initializeApp(environment.firebase);
    const db = getFirestore(app);

    const querySnapshot = await getDocs(collection(db, "Order"));
    querySnapshot.forEach((doc) => {
      const order = { ...doc.data(), id: doc.id }; // Add 'id' property with the document ID
      this.orders.push(order);
    });
  }

  
  async showCustomerDetails(orderId: string) {
    this.selectedOrder = this.orders.find(order => order.id === orderId);

    const app = initializeApp(environment.firebase);
    const db = getFirestore(app);

    console.log('id of cusotmer' , this.selectedOrder.oder.custId);
    const docRef = doc(db, "Customer", this.selectedOrder.oder.custId);

    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      this.customerDetails= null;
      this.customerDetails = docSnap.data();
      console.log("You have clicked on the order and here is person detail who orderd it", this.customerDetails);
    } else {
      console.log("No such Customer");
    }
    this.fetchItems(orderId);
  }

    fetchItems(orderIdToFind : string){
      console.log('you are searching this order' , orderIdToFind);
      const foundOrder = this.orders.find(order => order.id === orderIdToFind);

      if (foundOrder) {
        // If the order was found, add it to the items array
        this.orderItems = foundOrder.oder.dishes;

        console.log(this.orderItems); // You can further process or use the items array here
        
      } else {
        console.log('Order not found');
      }
    }


}

