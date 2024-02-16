import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LayoutComponent } from './layout/layout.component';
import { LoginComponent } from './login/login.component';
import { ProductDetailsComponent } from './product-details/product-details.component';

const routes: Routes = [
  { path: '',  redirectTo: 'login', pathMatch: 'full'},
  {path:'login',component:LoginComponent},
  {
    path:'layout',
    component:LayoutComponent,
    children:[
      {path:'dashboard',component:DashboardComponent},
      {path:'dashboard/:id',component:DashboardComponent},
      {path:'product-details/:productId',component:ProductDetailsComponent},
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
