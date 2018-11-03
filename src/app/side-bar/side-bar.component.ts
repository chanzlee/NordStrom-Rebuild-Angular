import { Component} from '@angular/core';
import { NavMenu } from '../model/nav-menu';
import { fadeTrigger } from 'animation';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css'],
  animations: [
    fadeTrigger
  ]
})
export class SideBarComponent{
  listString1="Men, All Men, Clothing, Shoes, Accessories, Designer, Grooming & Cologne, New Arrivals, Bestsellers, Sale, Extended Sizes, Big & Tall, Explore More, Holiday Gifts for Him, Topman & Men's Trend, Nike Men's Project, Pop-In: MCM, How-Tos & Style Advice, Shop By Occasion, Men's Brands, Topman, UGG Shop".split(", ");

  listString2="Athletic Shoes, Backpacks, Bags, Belts, Blazers & Sport Coats, Boat Shoes, Boots, Cameras, Casual Button-Down Shirts, Coats & Jackets, Cologne, Cologne Sets, Cuff Links, Dress Shirts, Fitness Trackers, Gloves, Hats, Headphones, Home Security, Jeans, Loafers, Moccasins, Multipacks, Oxfords, Pajama Bottoms, Pajama Sets, Pants, Perfume, Polo Shirts, Sandals, Shaving Cream, Slides, Slip-Ons, Slippers, Smart Watches, Sneakers, Socks, Speakers, Suits, Suit Separates, Sunglasses, Sweaters, Sweatshirts & Hoodies, T-Shirts, Ties, Tuxedos, Undershirts, Underwear, Vests, Watches".split(", ");

  listString3="XS, S, M, L, XL, XXL, XXXL+, Tall M, Tall L, Tall XL, Tall XXL, Tall XXXL+, Big 1X, Big 2X, Big 3X, Big 4X+".split(", ");

  listString4="Black, Grey, White, Beige, Brown, Metallic, Purple, Blue, Green, Yellow, Orange, Pink, Red, Off-white".split(", ");

  listString5="Under $25, $25 – $50, $50 – $100, $100 – $150, $150 – $200, $200 – $300, $300 – $500, $500 – $1,000, Over $1,000".split(", ");

  listString6="1901, 7 For All Mankind®, adidas, adidas Originals, AG, Alpha Industries, Balenciaga, Birkenstock, Bonobos, Bose®, BOSS, Brixton, Burberry, Calvin Klein, Canada Goose, Canali, CHANEL, Cole Haan, Comme des Garçons, Comme des Garçons PLAY, Creed, Cutter & Buck, Daniel Buchler, David Donahue, Dr. Martens, ECCO, Fitbit, Frye, Goodlife, Gucci, Hart Schaffner Marx, Herschel Supply Co., Hickey Freeman, Jack Black, James Perse, Le Labo, Maison Margiela, Mavi Jeans, Mizzen+Main, Moncler, Nest, New Balance, Nike, Nordstrom Men's Shop, PAIGE, Patagonia, Peter Millar, Polo Ralph Lauren, Rainbow, Ray-Ban, Robert Barakett, Salvatore Ferragamo, Santorelli, Sperry, Ted Baker London, The North Face, The Rail, The Tie Bar, Timberland, TOM FORD, Tommy John, Topman, Travis Mathew, Tumi, UGG®, Under Armour, VALENTINO GARAVANI, Viktor&Rolf, vineyard vines, Wolverine, Yves Saint Laurent".split(", ");

  subcriteria1= new NavMenu("Category", this.listString1);
  subcriteria2= new NavMenu("Size", this.listString2);
  subcriteria3= new NavMenu("Width", this.listString3);
  subcriteria4= new NavMenu("Color", this.listString4);
  subcriteria5= new NavMenu("Price", this.listString5);
  subcriteria6= new NavMenu("Brand", this.listString6);


  criterias=[
    this.subcriteria1,
    this.subcriteria2,
    this.subcriteria3,
    this.subcriteria4,
    this.subcriteria5,
    this.subcriteria6,
  ]
  constructor() { }
}
