import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';

interface IUser {
     firstName: string,
    lastName: string,
    email:string ,
    phone: string,
    address: string,
    password: string,
    confirmPassword?: string,
}

@Component({
  selector: 'app-registration-page',
  imports: [FormsModule, CommonModule, RouterModule,],
  templateUrl: './registration-page.html',
  styleUrl: './registration-page.css'
})



export class RegistrationPage {

  registerData: IUser = {
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: '',
    password: '',
    confirmPassword: ''
  };

  userData = this.registerData;
  

  showPassword = false;

  constructor(private router: Router) { }

  togglePassword() {
    this.showPassword = !this.showPassword;
  }

  isPasswordStrong(password: string): boolean {
  // debugger
    const pattern = /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&]).{7,}$/;
    return pattern.test(password);
  }

  // checkInputsValidity() {

  // }
  registerFormSubmit() {

    // Required fields
    if (!this.registerData.firstName || !this.registerData.lastName || !this.registerData.email ||
      !this.registerData.phone || !this.registerData.address || !this.registerData.password ||
      !this.registerData.confirmPassword) {
      alert('Please fill in all fields.');
      return;
    }

    // Email validation
    const emailPattern = /^[^\  @]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(this.registerData.email)) {
      alert('Please enter a valid email address.');
      return;
    }

    // Phone validation
    const phonePattern = /^\d{10}$/;
    if (!phonePattern.test(this.registerData.phone)) {
      alert('Please enter a valid 10-digit phone number.');
      return;
    }

    // Password validation
    if (!this.isPasswordStrong(this.registerData.password)) {
      // debugger
      alert('Enter a valid password (1 uppercase, 1 number, 1 special char, min 7 chars)');
      return;
    }

    if (this.registerData.password !== this.registerData.confirmPassword) {
      alert('Passwords do not match!');
      return;
    }
    // Check if user exists
    const existingUsers = JSON.parse(localStorage.getItem('users') || '[]');
    const userExists = existingUsers.some((u: any) => u.email === this.registerData.email);

    if (userExists) {
      alert('User already exists with this email!');
      return;
    }

    // const { confirmPassword, ...this.registerData } = this.registerData;
    // users.push(newUser);

    // Save new user
    const newUser = { ...this.registerData };
    delete newUser.confirmPassword;

    existingUsers.push(newUser);
    localStorage.setItem('users', JSON.stringify(existingUsers));

    alert('Registration Successful!');
    this.router.navigate(['/login']);
  }
}