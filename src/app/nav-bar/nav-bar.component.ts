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
 listStringTwo = "Women	Men	Kids	Home  Gifts	Beauty	Sale	What's Now New Arrivals Nordstrom-Exclusive Brands What's Now Women's How-Tos & Style Advice Topshop & Trend Pop-In: MCM Nordstrom x Nike UGG Shop Women's Brands Shop by Occasion Vacation Work Night Out Holiday Dressing The Wedding Suite Clothing Activewear Coats, Jackets & Blazers Dresses Jeans & Denim Jumpsuits & Rompers Lingerie, Hosiery & Shapewear Pants & Leggings Shorts Skirts Sleepwear, Lounge & Robes Sweaters Sweatshirts & Hoodies Swimsuits & Cover-Ups Tops Plus-Size Clothing Petite-Size Clothing Maternity Clothing Shoes Booties Boots Comfort Flats Heels Mules & Slides Oxfords & Loafers Rain Boots Sandals Slippers Sneakers & Athletic Snow & Winter Boots Wedges Wide Shoes Narrow Shoes Sizes 10.5 & Over Sizes 5 & Under Handbags Backpacks Belt Bags Bucket Bags Clutches & Pouches Crossbody Bags Designer Handbags Hobo Bags Satchels Shoulder Bags Tote Bags Wallets & Card Cases Jewelry Bracelets Earrings Fine Jewelry Necklaces Personalized Jewelry Rings Watches Accessories Belts Gloves & Mittens Hair Accessories Hats Luggage & Travel Phone Cases & Headphones Scarves & Wraps Sunglasses & Eyewear" 
 
 navMenuOne= new NavMenu("Designer", this.listStringOne.split[" "]); 
 navMenuTwo= new NavMenu("Women", this.listStringTwo.split[" "]); 
  navMenus = [this.navMenuOne,this.navMenuTwo];
}
