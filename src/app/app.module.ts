import { EnvironmentInjector, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { MenusComponent } from './menus/menus.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { FooterComponent } from './footer/footer.component';
import { SweetsComponent } from './menus/sweets/sweets.component';
import { RotiComponent } from './menus/roti/roti.component';
import { CardComponent } from './menus/card/card.component';
import { CartComponent } from './cart/cart.component';
import { VegComponent } from './menus/veg/veg.component';
import { NonVegComponent } from './menus/non-veg/non-veg.component';
import { SnacksComponent } from './menus/snacks/snacks.component';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AccountComponent } from './account/account.component';
import { environment } from '../environments/environment';
import { SignUpComponent } from './sign-up/sign-up.component';

import { provideFirebaseApp, getApp, initializeApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { collection } from 'firebase/firestore';
import { AdminComponent } from './admin/admin.component';
import { OrderComponent } from './order/order.component';

//down below are for toaster
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { AccountDetailComponent } from './account/account-detail/account-detail.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    MenusComponent,
    AboutUsComponent,
    FooterComponent,
    SweetsComponent,
    RotiComponent,
    CardComponent,
    CartComponent,
    VegComponent,
    NonVegComponent,
    SnacksComponent,
    AccountComponent,
    SignUpComponent,
    AdminComponent,
    OrderComponent,
    AccountDetailComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideFirestore(() => getFirestore()),

    BrowserAnimationsModule, // required animations module
    ToastrModule.forRoot(), // ToastrModule added
    
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 

}


