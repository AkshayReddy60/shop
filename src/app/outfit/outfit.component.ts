import { Component } from '@angular/core';
import { CartService } from '../cart.service';
@Component({
  selector: 'app-outfit',
  templateUrl: './outfit.component.html',
  styleUrl: './outfit.component.css'
})
export class OutfitComponent {
  constructor(private cartService: CartService) {}

  outfits: any[] = [
    { name: 'Shirt', price: 40, id:1, description: 'This is the iPhone Max. It is up to 40% off.', image: 'of-1.webp' },
    { name: 'Pant', price: 20, id:2, description: 'This is the iPhone Pro. It is up to 20% off.', image: 'of-2.jpg' },
    { name: 'Watch', price: 10,  id:3, description: 'This is the iPhone 15. It is up to 10% off.', image: 'of-3.webp' },
    { name: 'Shoes', price:40, id:4, description:'This is the iPhone 15. It is up to 10% off.', image: 'of-4.jpg' },
    { name: 'Shorts', price:40, id:5, description:'This is the iPhone 15. It is up to 10% off.', image: 'of-5.webp' },
    { name: 'Shocks', price:40, id:5, description:'This is the iPhone 15. It is up to 10% off.', image: 'of-6.jpg' },
    { name: 'Kurtha', price:40, id:5, description:'This is the iPhone 15. It is up to 10% off.', image: 'of-7.webp' },
    { name: 'Rings', price:40, id:5, description:'This is the iPhone 15. It is up to 10% off.', image: 'of-8.jpg' },
    { name: 'Lehenga', price:40, id:5, description:'This is the iPhone 15. It is up to 10% off.', image: 'of-9.jpg' },
    { name: 'T-shirts', price:40, id:5, description:'This is the iPhone 15. It is up to 10% off.', image: 'of-10.webp' },
    { name: 'Bracelet', price:40, id:5, description:'This is the iPhone 15. It is up to 10% off.', image: 'of-11.jpg' },
    { name: 'Watch for womens', price:40, id:5, description:'This is the iPhone 15. It is up to 10% off.', image: 'of-12.jpg' },
  ];

  addToCart(outfit: any) {
   this.cartService.addToCart(outfit);
   
    alert("Item added to cart!");
  }
}


