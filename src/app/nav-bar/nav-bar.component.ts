import { Component } from '@angular/core';
import { AuthService } from './../services/auth.service';
import { NavMenu } from '../model/nav-menu';
import { fade } from 'animation';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css'],
  animations: [
    fade
  ]
})
export class NavBarComponent{
  searchIsCollapsed: boolean;
  adminIsCollapsed: boolean;
  cartIsCollapsed: boolean;
  signIsCollapsed: boolean;
  constructor(public authService: AuthService) { }
}
