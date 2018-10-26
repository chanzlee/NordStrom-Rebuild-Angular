import { AuthHttp } from 'angular2-jwt';
import { Http } from '@angular/http';
import { map } from 'rxjs/operators';

import { Injectable } from '@angular/core';

@Injectable()
export class OrderService {

  constructor(private authHttp: AuthHttp, private http: Http) {
  }

  getOrders() { 
    // it will automatically set headers.

    return this.http.get('/api/orders')
    
    .pipe(map((response: any) => response.json()));
  }
}
