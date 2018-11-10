import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { Component, DoCheck } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { AuthService } from './../services/auth.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {
  reverse: boolean = false;
  productsRef: AngularFireList<any>;
  // products$: Observable<any[]>;
  // product$;
  productSnapshot: Observable<any[]>;
  // subscription: Subscription;

  objectKeys = object => Object.keys(object);

  constructor(private authService: AuthService, public db: AngularFireDatabase) {
    this.productsRef = db.list('/products')
    this.productSnapshot = this.productsRef.snapshotChanges().pipe(map(changes => {
      return changes.map(c => ({ key: c.payload.key, ...c.payload.val() }))
    }));

    // this.products$ = this.products.valueChanges();
    // this.product$ = db.object('/products/0').valueChanges();
    // console.log(this.products$);
  }

  // add(product: HTMLInputElement) { 
  //   this.productsRef.push({ name: product });
  //   product.value = '';
  // }

  // ngDoCheck() {
  //   this.productsRef = this.db.list('/products')
  //   this.productSnapshot = this.productsRef.snapshotChanges().pipe(map(changes => {
  //     return changes.map(c => ({ key: c.payload.key, ...c.payload.val() }))
  //   }));
  // }

  updateName(key: string, productName: string) {
    this.productsRef.update(key, { name: productName });
  }
  updatePrice(key: string, priceValue: number) {
    this.productsRef.update(key, { price: priceValue });
  }
  delete(key: string) {
    this.productsRef.remove(key);
  }
  deleteAll() {
    this.productsRef.remove();
  }

  dataQuery(criteria) {
    
    if (!criteria) {
      this.productsRef = this.db.list('/products');
      this.productSnapshot = this.productsRef.snapshotChanges().pipe(map(changes => {
        return changes.map(c => ({ key: c.payload.key, ...c.payload.val() }))
      }));

    } else {
      if (criteria.includes("reverse")) {
        this.reverse = true;
        criteria = criteria.replace("reverse", "");
        console.log(criteria);
        this.productsRef = this.db.list('/products', ref => ref.orderByChild(criteria));

        this.productSnapshot = this.productsRef.snapshotChanges().pipe(map(changes => {
          return changes.map(c => ({ key: c.payload.key, ...c.payload.val() }))
        }));


      } else {
        this.reverse = false;
        this.productsRef = this.db.list('/products', ref => ref.orderByChild(criteria));

        this.productSnapshot = this.productsRef.snapshotChanges().pipe(map(changes => {
          return changes.map(c => ({ key: c.payload.key, ...c.payload.val() }))
        }));
      }
    }
  }
}
