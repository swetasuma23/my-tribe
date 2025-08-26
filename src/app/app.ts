import { Component, signal } from '@angular/core';
import { Router, RouterModule, RouterOutlet } from '@angular/router';
import { LoginPage } from './componenets/login-page/login-page';
import { RegistrationPage } from './componenets/registration-page/registration-page';
import { Dashboard } from './componenets/dashboard/dashboard';
import { UnderConstruction } from './componenets/under-construction/underconstruction';
// import { ProductList } from './product-list/product-list';





@Component({
  selector: 'app-root',
  imports: [RouterOutlet, LoginPage, RegistrationPage, Dashboard, UnderConstruction],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class App {
  protected readonly title = signal('tribe-shopping-app');



}
 