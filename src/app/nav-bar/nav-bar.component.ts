import { Component } from '@angular/core';
import { AuthService } from './../services/auth.service';
import { NavMenu } from '../model/nav-menu';
import { fade } from 'animation';
import { transition, state, style, trigger, animate } from '@angular/animations';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css'],
  animations: [
    trigger('expandCollapse', [
      state('collapsedState', style({ 
        height:0,
        opacity:0,
        paddingTop: 0,
        paddingBottom: 0,
        overflow:'hidden',
        backgroundColor:"yellow"
      })),
      state('expandedState', style({ 
        height:"*",
        opacity:1,
      })),
      transition('collapsedState => expandedState', [
        animate(1000)
      ]),
      transition('expandedState => collapsedState', [
        animate(1000)
      ]),
    ])
  ]
})
export class NavBarComponent{
  searchIsCollapsed: boolean;
  adminIsCollapsed: boolean;
  cartIsCollapsed: boolean;
  signIsCollapsed: boolean;
  constructor(public authService: AuthService) { }
}
