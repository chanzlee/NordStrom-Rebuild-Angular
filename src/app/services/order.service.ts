import { AuthHttp } from 'angular2-jwt';
import { Http } from '@angular/http';
import { map } from 'rxjs/operators';

import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';

@Injectable()
export class OrderService {
  products: AngularFireList<any>;
  
  constructor(private authHttp: AuthHttp, private http: Http, public db: AngularFireDatabase) {
  }

  getProducts() { 
    this.products = this.db.list('/products')
    return this.products;
  }
}
