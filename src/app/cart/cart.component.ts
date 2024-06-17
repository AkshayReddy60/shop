import { Component , inject} from '@angular/core';
import { CartService } from '../cart.service';
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent {
  cartService=inject(CartService);
  trackById(index: number, item: any): number {
    return item.id;
  }

  deleteFromCart(item: any){
    this.cartService.delete(item);

  }

}