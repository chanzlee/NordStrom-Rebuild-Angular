import { AngularFireDatabase, AngularFireList} from 'angularfire2/database';
import { Component } from '@angular/core';
import { Observable } from 'rxjs';import { map } from 'rxjs/operators';
import { AuthService } from './../services/auth.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {

  productsRef: AngularFireList<any>;
  // products$: Observable<any[]>;
  // product$;
  productSnapshot: Observable<any[]>;
  // subscription: Subscription;

  constructor (private authService: AuthService, public db: AngularFireDatabase) {
    this.productsRef = db.list('/products')
    // this.products$ = this.products.valueChanges();
    // this.product$ = db.object('/products/0').valueChanges();
    // console.log(this.products$);

    this.productSnapshot = this.productsRef.snapshotChanges().pipe(map(changes => {
      return changes.map(c => ({ key: c.payload.key, ...c.payload.val() }))
    }));
  }
  
  add(product: HTMLInputElement) { 
    this.productsRef.push({ name: product });
    product.value = '';
  }

  update(key: string, product: string) { 
    this.productsRef.update(key, { name: product });
  }
  delete(key:string) {
    this.productsRef.remove(key);
  }
  deleteAll() {
    this.productsRef.remove();
  }
}
//https://github.com/angular/angularfire2/issues/1158

