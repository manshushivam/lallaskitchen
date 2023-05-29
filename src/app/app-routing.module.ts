import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MenusComponent } from './menus/menus.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { SweetsComponent } from './menus/sweets/sweets.component';
import { RotiComponent } from './menus/roti/roti.component';
import { CartComponent } from './cart/cart.component';
import { VegComponent } from './menus/veg/veg.component';
import { NonVegComponent } from './menus/non-veg/non-veg.component';
import { SnacksComponent } from './menus/snacks/snacks.component';
import { AccountComponent } from './account/account.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { AdminComponent } from './admin/admin.component';
import { AuthGuard } from './auth.guard';
import { AccountDetailComponent } from './account/account-detail/account-detail.component';
import { OrderComponent } from './order/order.component';


const routes: Routes = [

  { path: 'menus', component: MenusComponent, 
    children: [
      { path: 'sweets', component: SweetsComponent },
      { path: 'roti' ,component:RotiComponent},
      { path: 'veg' , component:VegComponent},
      { path: 'nonVeg',component:NonVegComponent},
      {path: 'snacks' , component:SnacksComponent},
    ]
},

{ path: 'account', component: AccountComponent, 
  children: [
    { path: 'accountDetail', component: AccountDetailComponent },
    { path: 'order' ,component:OrderComponent},
  ]
},


  {
    component : HomeComponent,
    path : '',
  },
  
  {
    component: MenusComponent,
    path : 'menus',
  },
  { 
    component: CartComponent,
    path: 'cart',
  },
 
 
  {
    component: AboutUsComponent,
    path: 'aboutUs',
  },
  {
    component:AccountComponent,
    path : 'account',
    // canActivate: [AuthGuard]
  },
  {
    component:SignUpComponent,
    path : 'signup'
  },
  {
    component : AdminComponent,
    path : 'admin',
    // canActivate: [AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
