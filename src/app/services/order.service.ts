import { AuthHttp } from 'angular2-jwt';
import { Http } from '@angular/http';
import { map } from 'rxjs/operators';

import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';

@Injectable()
export class OrderService {
  courses: AngularFireList<any>;
  
  constructor(private authHttp: AuthHttp, private http: Http, public db: AngularFireDatabase) {
  }

  getProducts() { 
    this.courses = this.db.list('/courses')
    return this.courses;
  }
}
