import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-login-page',
  standalone: true,
  imports: [FormsModule, RouterModule,CommonModule],
  templateUrl: './login-page.html',
  styleUrl: './login-page.css',

})
export class LoginPage {
  loginData = { email: '', password: '' };
  showPassword = false;

  constructor(private router: Router) { }

  togglePassword() {
    this.showPassword = !this.showPassword;
  }

  loginFormsubmit() {
    // Mark all fields as touched to trigger template validations
// debugger
    // form.form.markAllAsTouched();


    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    
    if (!this.loginData.email || this.loginData.password)  {
      debugger
      alert('Please enter a valid email address.');


      return; // Stop if other fields invalid
    }

    // if (!this.loginData.email || !emailPattern.test(this.loginData.email.trim())) {
    //   alert('Please enter a valid email address.');
    //   return;
    // }

   

    const usersData = localStorage.getItem('users');
    if (usersData) {
      const users = JSON.parse(usersData);
      const foundUser = users.find(
        (user: any) =>
          user.email === this.loginData.email && user.password === this.loginData.password
      );

      if (foundUser) {
        alert('Login Successful!');
        localStorage.setItem('loggedUser', JSON.stringify(foundUser));
        this.router.navigate(['/dashboard']);
      } else {
        alert('Invalid Email or Password');
      }
    } else {
      alert('No users found. Please register.');
    }
  }


}