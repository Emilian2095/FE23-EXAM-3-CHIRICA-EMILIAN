import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './products/products.component';
import { DetailsComponent } from './details/details.component';
import { CartComponent } from './cart/cart.component';
import { AboutComponent } from './about/about.component';

const routes: Routes = [
  {
    path: "home",
    component: HomeComponent
  },
  {
    path: '',
    redirectTo: "/home",
    pathMatch: "full"
  },
  {
    path:'cart',
    component:CartComponent
  },
  {
path: "details/:id",
component: DetailsComponent
  },
  {
    path: "products",
    component: ProductsComponent
  },
  {
   path: "cart",
   component: CartComponent
  },
  {
path: "about",
component: AboutComponent
  },
  {
    path: '**',
    redirectTo: 'home'
  }
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
