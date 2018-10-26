import { Component} from '@angular/core';
import { AuthService } from './../services/auth.service';
import { NavMenu } from '../model/nav-menu';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent {

  constructor(private authService: AuthService) { }
  listStringOne = "New Arrivals Jeffrey's Edit Pop-In: Memphis Milano Designer Brands Balenciaga Burberry CALVIN KLEIN 205W39NYC Chloé Christian Louboutin Dries Van Noten Fendi Givenchy Gucci Loewe Prada Saint Laurent Valentino All Women's Designer Brands All Men's Designer Brands Women Designer Clothing signer Shoes Designer Handbags Designer Jewelry Designer Accessories Men All Men's Designer Designer Clothing Designer Shoes Designer Accessories Kids Designer Girls Designer Boys Designer Baby Girl Designer Baby Boy Designer Shoes Designer Accessories SPACE: Emerging & Advanced Designer Clothing Shoes Handbags Jewelry Accessories Home SPACE: Emerging & Advanced Designer Brands Acne Studios Comme des Garçons Jacquemus Off-White Simon Miller Simone Rocha Vetements WWAKE";

  navMenuOne= new NavMenu("Designer", this.listStringOne.split[" "]);

  navMenus = [this.navMenuOne];
}
