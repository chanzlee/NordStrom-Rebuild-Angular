import { Component } from '@angular/core';
import { AuthService } from './../services/auth.service';
import { NavMenu } from '../model/nav-menu';
import { fadeTrigger } from 'animation';
import { transition, state, style, trigger, animate } from '@angular/animations';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css'],
  animations: [
    fadeTrigger
  ]
})
export class NavBarComponent{
  searchIsCollapsed: boolean;
  adminIsCollapsed: boolean;
  cartIsCollapsed: boolean;
  signIsCollapsed: boolean;
  constructor(public authService: AuthService) { }
}
