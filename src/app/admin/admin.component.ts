import { OrderService } from './../services/order.service';
import { Component} from '@angular/core';
import { AngularFireDatabase, AngularFireList} from 'angularfire2/database'
import { Observable } from 'rxjs';import { map } from 'rxjs/operators';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent{

  products: AngularFireList<any> = this.orderService.getProducts();
  products$: Observable<any[]>;
  product$;
  productSnapshot;


  constructor (public orderService: OrderService,
               public db: AngularFireDatabase,
               private authService: AuthService
               ) {
    this.products = db.list('/products')
    this.products$ = this.products.valueChanges();
    this.product$ = db.object('/products/0').valueChanges();

    this.productSnapshot = this.products.snapshotChanges().pipe(map(changes => {
      return changes.map(c => ({ key: c.payload.key, ...c.payload.val() }))
    }));
  }
  
  add(product: HTMLInputElement) { 
    console.log(product);
    let newProduct = product.form.controls;
    

    this.products.push({
      name: newProduct.name.value,
      price: newProduct.price.value,
      isNew: newProduct.isNew.value,
      src: newProduct.src.value,
      star: newProduct.star.value,
      reviews: { "defalt-review" : { "name":"Chan", "comment": "Leave review and earn up to $10 reward", "star": "3"}}
    });
    
  }

  update(key: string, product: string) { 
    this.products.update(key, { name: product });
  }
  delete(key:string) {
    this.products.remove(key);
  }
  deleteAll() {
    this.products.remove();
  }
}

