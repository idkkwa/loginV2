import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddLoginComponent } from './components/add-login/add-login.component';
import { AddProductComponent } from './components/add-product/add-product.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {path:'login', component:LoginComponent},
  {path:'', component:HomeComponent},
  {path:'products', component:ProductListComponent},
  {path:'addproducts', component:AddProductComponent},
  {path:'products/:id', component:ProductDetailsComponent},
  {path:'register', component:AddLoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }