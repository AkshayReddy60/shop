import { Component } from '@angular/core';
import { CartService } from '../cart.service'; 
@Component({
  selector: 'app-realme',
  templateUrl: './realme.component.html',
  styleUrl: './realme.component.css'
})
export class RealmeComponent {
  constructor(private cartService: CartService) {}

  realmes: any[] = [
    { name: 'realme-nazo', price: 40, id:6, description: 'This is the iPhone Max. It is up to 40% off.', image: 'nazro.jpg' },
    { name: 'realme pods', price: 20, id:7, description: 'This is the iPhone Pro. It is up to 20% off.', image: 'realpodss.webp' },
    { name: 'realme8-pro', price: 10,  id:8, description: 'This is the iPhone 15. It is up to 10% off.', image: '8-pro.jpg' },
    { name: 'realme11', price:40, id:9, description:'This is the iPhone 15. It is up to 10% off.', image: 'wire.webp' },
    { name: 'realme12', price:40, id:10, description:'This is the iPhone 15. It is up to 10% off.', image: 'new.webp' }
  ];

  addToCart(realme: any) {
   this.cartService.addToCart(realme);
   
    alert("Item added to cart!");
  }

}
