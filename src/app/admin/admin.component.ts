import { Component } from '@angular/core';
import { CrudService } from '../services/crud.service';
import { ToastrService } from 'ngx-toastr';
import { getDownloadURL, getStorage, ref, uploadBytes } from "firebase/storage";
import { doc, getDoc, getFirestore, serverTimestamp, setDoc } from 'firebase/firestore';
import { initializeApp } from 'firebase/app';
import { environment } from 'src/environments/environment';
@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent {
  name?: string;
  category?: string;
  status?: string;
  description?: string;
  price?: number;
  image?: string;


  constructor(private crud: CrudService , private toaster: ToastrService) {
    this.crud.readItems();
  }

  UploadImage(event:any){
    this.image= '';
    const file = event?.target.files[0];
    if(file){
      const path = 'Items/'+(file.name);
      const storage = getStorage();
      const storageRef = ref(storage, path);
      uploadBytes(storageRef, file).then((snapshot) => {
        console.log('Uploaded a blob or file!')
        getDownloadURL(snapshot.ref).then((downloadURL) => {
          this.image = downloadURL;
          console.log('UPloaded in storeage')
          
        });
      });
    }
  }

  get items() {
  
    return this.crud.Items;
  }


  submit() {
    console.log(this.status);
    this.crud.uploadNewItem(this.category , this.name, this.description, this.status, this.price, this.image);

    this.name = ''
    this.description= '';
    this.price = NaN;
    this.image = '';
    this.category = '';
    this.status = '';

  }


  ChangeStatus(item?:any){
    console.log(item.status);
    if(item.status === 'Active'){
      this.crud.inactiveItem(item);
    }else{
      
      this.crud.activeItem(item);
    }
  }



  RemoveItem(item?:any){
    this.crud.deleteItems(item.id);
  }



}
