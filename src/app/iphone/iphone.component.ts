import { Component } from '@angular/core';
import { CartService } from '../cart.service'; 
@Component({
  selector: 'app-iphone',
  templateUrl: './iphone.component.html',
  styleUrls: ['./iphone.component.css'] 
})
export class IphoneComponent {

  constructor(private cartService: CartService) {}

  iphones: any[] = [
    { name: 'iphone-max', price: 40, id:11, description: 'This is the iPhone Max. It is up to 40% off.', image: 'iphone-15.webp' },
    { name: 'iphone-pro', price: 20, id:12, description: 'This is the iPhone Pro. It is up to 20% off.', image: 'iphone-15-p.avif' },
    { name: 'iphone-15', price: 10,  id:13, description: 'This is the iPhone 15. It is up to 10% off.', image: 'i-phone-15-2.jpg' },
    { name: 'ipad', price:40, id:14, description:'This is the iPhone 15. It is up to 10% off.', image: 'ipad.jpg' },
    { name: 'airpods', price:40, id:15, description:'This is the iPhone 15. It is up to 10% off.', image: 'airpods.jpg' }
  ];

  addToCart(iphone: any) {
   this.cartService.addToCart(iphone);
   
    alert("Item added to cart!");
  }
}
    
    