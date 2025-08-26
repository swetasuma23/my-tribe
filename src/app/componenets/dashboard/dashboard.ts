import { CommonModule } from '@angular/common';
import { Component, HostListener,OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  imports: [RouterModule,CommonModule,FormsModule],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css'
})
export class Dashboard implements OnInit{

  // Single image URL
  mainImage = 'https://images.pexels.com/photos/4148840/pexels-photo-4148840.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260';
  activeTab = 'home';
  backupImage = 'assets/default-image.jpg'; // Add a default image in assets

  constructor(private router: Router) {}

  // Add carouselImages property
  carouselImages: string[] = [
    'https://images.pexels.com/photos/985635/pexels-photo-985635.jpeg?cs=srgb&dl=pexels-anne-363161-985635.jpg&fm=jpg&_gl=1*dytyvm*_ga*ODk3NjUyMTU0LjE3NTU0NDU2NjA.*_ga_8JE65Q40S6*czE3NTU0NDU2NjAkbzEkZzEkdDE3NTU0NDYxMTQkajQxJGwwJGgw',
    'https://images.pexels.com/photos/1598505/pexels-photo-1598505.jpeg',
    'https://images.pexels.com/photos/1152077/pexels-photo-1152077.jpeg?cs=srgb&dl=pexels-geyonk-1152077.jpg&fm=jpg&_gl=1*3g1fd6*_ga*ODk3NjUyMTU0LjE3NTU0NDU2NjA.*_ga_8JE65Q40S6*czE3NTU0NDU2NjAkbzEkZzEkdDE3NTU0NDYwMjUkajM2JGwwJGgw',
    'https://images.pexels.com/photos/190819/pexels-photo-190819.jpeg'
  ];

  ngOnInit() {
    // Dashboard initialization - no product data needed
  }
  // Define functions that may be called from dashboard.html but are not present here
  nextImage() {
    const currentIndex = this.carouselImages.indexOf(this.mainImage);
    const nextIndex = (currentIndex + 1) % this.carouselImages.length;
    this.mainImage = this.carouselImages[nextIndex];
  }

  prevImage() {
    const currentIndex = this.carouselImages.indexOf(this.mainImage);
    const prevIndex = (currentIndex - 1 + this.carouselImages.length) % this.carouselImages.length;
    this.mainImage = this.carouselImages[prevIndex];
  }

  selectImage(image: string) {
    this.mainImage = image;
  }

  imageDescriptions: string[] = [
    'Dresses for Women',
    'Shoes On Sale',
    'Bags',
    'watches'
  ];
  
  categories = [
    { name: 'Men', items: ['Clothing', 'Footwear', 'Accessories', 'Bags'] },
    { name: 'Women', items: ['Clothing', 'Footwear', 'Accessories', 'Bags'] },
    { name: 'Kids', items: ['Clothing', 'Footwear', 'Accessories', 'Bags'] }
  ];
  

  navigateTo(page: string) {
    this.activeTab = page;
    console.log(`Navigating to ${page}`);
    this.router.navigate(['/underconstruction']);
  }

  navigateToCategory(gender: string, category: string) {
    console.log(`Navigating to ${category} in ${gender}`);
    // Map dashboard categories to product list categories
    const categoryMap: { [key: string]: string } = {
      'clothing': 'tshirts',
      'footwear': 'shoes', 
      'accessories': 'watches',
      'bags': 'bags'
    };
    
    const mappedCategory = categoryMap[category] || 'all';
    this.router.navigate(['/product-list'], { 
      queryParams: { category: mappedCategory } 
    });
  }

  navigateToImageCategory(imageIndex: number) {
    this.router.navigate(['/product-list']);
  }

  handleImageError() {
    this.mainImage = this.backupImage;
  }
}

