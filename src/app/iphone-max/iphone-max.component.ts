import { Component } from '@angular/core';
import { CartService } from '../cart.service';
@Component({
  selector: 'app-iphone-max',
  templateUrl: './iphone-max.component.html',
  styleUrl: './iphone-max.component.css'
})
export class IphoneMaxComponent {
  images: string[] = [
    'assets/ip-1.png',
    'assets/ip-2.png',
    'assets/ip-3.png',
    'assets/ip-4.png',
    'assets/ip-5.png',
    'assets/ip-6.png'
  ];
  currentIndex: number = 0;

  nextImage() {
    this.currentIndex = (this.currentIndex + 1) % this.images.length;
  }

  previousImage() {
    this.currentIndex = (this.currentIndex - 1 + this.images.length) % this.images.length;
  }
  
   
}


  
  