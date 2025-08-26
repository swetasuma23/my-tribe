import { Routes } from '@angular/router';
import { LoginPage } from './componenets/login-page/login-page';
import { RegistrationPage } from './componenets/registration-page/registration-page';
import { Dashboard } from './componenets/dashboard/dashboard';
import { UnderConstruction } from './componenets/under-construction/underconstruction';
import { ProductList } from './product-list/product-list';
import { ProductDetails } from './product-details/product-details';


export const routes: Routes = [

{ path: '', redirectTo: 'login', pathMatch: 'full' },
{ path: 'login', component: LoginPage },                      
{ path: 'register', component: RegistrationPage },
{ path: 'dashboard', component: Dashboard },
{ path: 'underconstruction', component: UnderConstruction },
{ path: 'product-list', component: ProductList },
{ path: 'product-details', component: ProductDetails },


];


