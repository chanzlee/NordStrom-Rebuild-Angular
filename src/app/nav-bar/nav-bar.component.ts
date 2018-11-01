import { Component} from '@angular/core';
import { AuthService } from './../services/auth.service';
import { NavMenu } from '../model/nav-menu';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent {
  constructor(public authService: AuthService) { }

}
