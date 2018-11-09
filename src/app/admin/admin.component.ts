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
    let newProduct = product.form.controls;
    console.log();

    this.products.push({
      name: newProduct.name,
      price: newProduct.price,
      isNew: newProduct,
      src: newProduct.src,
      star: newProduct.star,
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

