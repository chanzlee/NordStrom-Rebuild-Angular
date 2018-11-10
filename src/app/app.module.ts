import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AdminAuthGuard } from './services/admin-auth-guard.service';
import { AuthGuard } from './services/auth-guard.service';
// import { AuthHttp, AUTH_PROVIDERS, provideAuth, AuthConfig } from 'angular2-jwt';
import { OrderService } from './services/order.service';
import { MockBackend } from '@angular/http/testing';
import { fakeBackendProvider } from './helpers/fake-backend';
import { AuthService } from './services/auth.service';
import { FormsModule } from '@angular/forms';
import { HttpModule, Http, BaseRequestOptions, RequestOptions } from '@angular/http';
import { RouterModule } from '@angular/router'; 

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { AdminComponent } from './admin/admin.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { NoAccessComponent } from './no-access/no-access.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { DataComponent } from './data/data.component';

import { environment } from 'src/environments/environment';
import { AngularFireModule} from 'angularfire2'
import { AngularFireDatabaseModule} from 'angularfire2/database';
import { SubNavComponent } from './sub-nav/sub-nav.component'
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FooterComponent } from './footer/footer.component';
import { masterFirebaseConfig } from './api-keys';
import { ProductsComponent } from './products/products.component';

import { BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { SideBarComponent } from './side-bar/side-bar.component';
import { AUTH_PROVIDERS, AuthConfig, AuthHttp } from 'angular2-jwt';
import { ReversePipe } from './reverse.pipe';

export const firebaseConfig = {
  apiKey: masterFirebaseConfig.apiKey,
  authDomain: masterFirebaseConfig.authDomain,
  databaseURL: masterFirebaseConfig.databaseURL,
  storageBucket: masterFirebaseConfig.storageBucket
};

export function authHttpServiceFactory(http: Http, options: RequestOptions) {
  return new AuthHttp(new AuthConfig({
    tokenName: 'token',
          tokenGetter: (() => localStorage.getItem('token')),
          globalHeaders: [{'Content-Type':'application/json'}],
     }), http, options);
}



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    AdminComponent,
    HomeComponent,
    NotFoundComponent,
    NoAccessComponent,
    NavBarComponent,
    DataComponent,
    SubNavComponent,
    FooterComponent,
    ProductsComponent,
    SideBarComponent,
    ReversePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot([      
      { path: '', component: HomeComponent },
      { path: 'admin', component: AdminComponent, canActivate: [AuthGuard, AdminAuthGuard] },
      { path: 'login', component: LoginComponent },
      { path: 'products', component: ProductsComponent },
      { path: 'no-access', component: NoAccessComponent },
      { path: '**', component: NoAccessComponent }
    ]),
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    NgbModule.forRoot(),
    BrowserAnimationsModule
  ],
  providers: [
    //Getting order from server
    OrderService,
    //Log in/ Log out
    AuthService,
    AuthGuard,
    AdminAuthGuard,
    {
      provide: AuthHttp,
      useFactory: authHttpServiceFactory,
      deps: [Http, RequestOptions]
    },

    // For creating a mock back-end.
    fakeBackendProvider,
    MockBackend,
    BaseRequestOptions
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
