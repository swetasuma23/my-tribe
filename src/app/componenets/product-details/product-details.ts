import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Router } from '@angular/router';

// Product Interface
interface Product {
  id: number;
  title: string;
  price: number;
  thumbnail: string;
  description: string;
  category: string;
}

@Component({
  selector: 'app-product-details',
  imports: [CommonModule, RouterModule],
  templateUrl: './product-details.html',
  styleUrl: './product-details.css'
})
export class ProductDetails implements OnInit {
  product: Product | null = null;

  constructor(private router: Router) {}

  ngOnInit() {
    const productData = localStorage.getItem('selectedProduct');
    if (productData) {
      this.product = JSON.parse(productData);
    } else {
      // Redirect back to product list if no product data
      this.router.navigate(['/product-list']);
    }
  }

  goBack() {
    this.router.navigate(['/product-list']);
  }
}
