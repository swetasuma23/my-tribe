import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule, Router, ActivatedRoute } from '@angular/router';

// Product Interface
interface Product {
  id: number;
  title: string;
  price: number;
  thumbnail: string;
  description: string;
  category: string;
  seller:string;
  variant:number;
}

@Component({
  selector: 'app-product-list',
  imports: [RouterModule,CommonModule],
  templateUrl: './product-list.html',
  styleUrl: './product-list.css'
})
export class ProductList {
  allProducts: Product[] = [
    // T-Shirts Category
    { id: 1, title: "Classic Cotton T-Shirt",variant:2, price: 499, thumbnail: "images/cotton shirt.jpg", description: "Comfortable cotton t-shirt for everyday wear", category: "tshirts", seller: "FashionHub" },
    { id: 2, title: "Polo T-Shirt",variant:2, price: 699, thumbnail: "images/tshirt2.webp", description: "Elegant polo t-shirt for casual occasions", category: "tshirts", seller: "StyleMart" },
    { id: 3, title: "Graphic T-Shirt",variant:2, price: 599, thumbnail: "images/graphic tshirt.jpg", description: "Stylish graphic t-shirt with trendy designs", category: "tshirts", seller: "UrbanWear" },
    { id: 4, title: "V-Neck T-Shirt", variant:2 ,price: 449, thumbnail: "images/v neck.jpg", description: "Modern v-neck t-shirt for a sophisticated look", category: "tshirts", seller: "CasualCo" },
    
    // Shoes Category
    { id: 5, title: "Running Shoes",variant:2, price: 1299, thumbnail: "images/running.jpg", description: "Comfortable running shoes for athletes", category: "shoes", seller: "SportZone" },
    { id: 6, title: "Casual Sneakers", variant:2,price: 899, thumbnail: "images/sneaker.jpg", description: "Stylish casual sneakers for daily wear", category: "shoes", seller: "FootwearPro" },
    { id: 7, title: "Formal Shoes",variant:2, price: 1499, thumbnail: "images/formal_shoe.jpg", description: "Elegant formal shoes for professional settings", category: "shoes", seller: "ElegantSteps" },
    { id: 8, title: "Flats", variant:2,price: 1099, thumbnail: "images/flats.jpg", description: "High-performance sports shoes for various activities", category: "shoes", seller: "AthleticGear" },
    
    // Watches Category
    { id: 9, title: "Digital Watch", variant:2,price: 1999, thumbnail: "images/digital.png", description: "Modern digital watch with multiple features", category: "watches", seller: "TimeKeeper" },
    { id: 10, title: "Analog Watch",variant:2, price: 2499, thumbnail: "images/analogue.jpg", description: "Classic analog watch with leather strap", category: "watches", seller: "ClassicTime" },
    { id: 11, title: "Smart Watch", variant:2,price: 3999, thumbnail: "images/smart.jpg", description: "Advanced smartwatch with health tracking", category: "watches", seller: "TechWear" },
    { id: 12, title: "Sports Watch",variant:2, price: 1799, thumbnail: "images/sports.jpg", description: "Durable sports watch for active lifestyle", category: "watches", seller: "ActiveTime" },
    
    // Bags Category
    { id: 13, title: "Backpack",variant:2, price: 799, thumbnail: "images/bag.png", description: "Spacious backpack for daily use", category: "bags", seller: "BagWorld" },
    // { id: 14, title: "Handbag", variant:2,price: 999, thumbnail: "images/bag.png", description: "Elegant handbag for formal occasions", category: "bags", seller: "LuxuryBags" },
    // { id: 15, title: "Laptop Bag",variant:2, price: 1199, thumbnail: "images/bag.png", description: "Professional laptop bag with compartments", category: "bags", seller: "OfficeGear" },
    // { id: 16, title: "Travel Bag",variant:2, price: 899, thumbnail: "images/bag.png", description: "Durable travel bag for trips", category: "bags", seller: "TravelEssentials" }
  ];

  products: Product[] = [];
  selectedCategory: string = 'all';

  constructor(private router: Router, private route: ActivatedRoute) {}

  ngOnInit() {
    // Get category from query parameters
    this.route.queryParams.subscribe(params => {
      const category = params['category'];
     console.log("came in if");
      if (category && category !== 'all') {
        this.selectedCategory = category;
        this.products = this.allProducts.filter(product => product.category === category);
      } else {
        console.log("came in else");
        this.selectedCategory = "all";
        this.products = this.allProducts; // Show all products initially
      }
    });
  }

  filterByCategory(category: string) {
    this.selectedCategory = category;
    if (category === 'all') {
      this.products = this.allProducts;
    } else {
      this.products = this.allProducts.filter(product => product.category === category);
    }
  }

  viewDetails(product: Product) {
    // Store product data in localStorage for product details page
    localStorage.setItem('selectedProduct', JSON.stringify(product));
    this.router.navigate(['/product-details']);
  }
}
