import { Component, OnInit } from '@angular/core';
import { AuthService } from './../services/auth.service';
import { NavMenu } from '../model/nav-menu';

@Component({
  selector: 'app-sub-nav',
  templateUrl: './sub-nav.component.html',
  styleUrls: ['./sub-nav.component.css']
})
export class SubNavComponent {

  constructor(public authService: AuthService) { }
  
  listStringOne = "Holiday Gifts: Luxe Lover, Designer New Arrivals, Jeffrey's Edit, Designer Brands, Balenciaga, Burberry, CALVIN KLEIN 205W39NYC, Chloé, Christian Louboutin, Dries Van Noten, Fendi, Givenchy, Gucci, Loewe, Prada, Saint Laurent, Valentino, All Women's Designer Brands, All Men's Designer Brands, Women, Designer Clothing, Designer Shoes, Designer Handbags, Designer Jewelry, Designer Accessories, Men, All Men's Designer, Designer Clothing, Designer Shoes, Designer Accessories, Kids, Designer Girls, Designer Boys, Designer Baby Girl, Designer Baby Boy, Designer Shoes, Designer Accessories, SPACE: Emerging & Advanced Designer, Clothing, Shoes, Handbags, Jewelry, Accessories, Home, SPACE: Emerging & Advanced Designer Brands, Acne Studios, Comme des Garçons, Jacquemus, Off-White, Simon Miller, Simone Rocha, Vetements, WWAKE";
  listStringTwo ="Holiday Gifts for Her, , New Arrivals, Nordstrom-Exclusive Brands, What's Now, Women's How-Tos & Style Advice, Topshop & Trend, Pop-In: MCM, Nordstrom x Nike, UGG Shop, Women's Brands, Shop by Occasion, Vacation, Work, Night Out, Holiday Dressing, The Wedding Suite, Clothing, Activewear, Coats, Jackets & Blazers, Dresses, Jeans & Denim, Jumpsuits & Rompers, Lingerie, Hosiery & Shapewear, Loungewear, Pants & Leggings, Skirts, Sleepwear & Robes, Sweaters, Sweatshirts & Hoodies, Swimsuits & Cover-Ups, Tops, Plus-Size Clothing, Petite-Size Clothing, Maternity Clothing, Shoes, Booties, Boots, Comfort, Flats, Heels, Mules & Slides, Oxfords & Loafers, Rain Boots, Sandals, Slippers, Sneakers & Athletic, Snow & Winter Boots, Wedges, Wide Shoes, Narrow Shoes, Sizes 10.5 & Over, Sizes 5 & Under, Handbags, Backpacks, Belt Bags, Bucket Bags, Clutches & Pouches, Crossbody Bags, Designer Handbags, Hobo Bags, Satchels, Shoulder Bags, Tote Bags, Wallets & Card Cases, Jewelry, Bracelets, Earrings, Fine Jewelry, Necklaces, Personalized Jewelry, Rings, Watches, Accessories, Belts, Gloves & Mittens, Hair Accessories, Hats, Luggage & Travel, Phone Cases & Headphones, Scarves & Wraps, Sunglasses & Eyewear";
  listStringThree="Holiday Gifts for Him, New Arrivals, Topman & Men's Trend, Pop-In: MCM, Bestsellers, How-Tos & Style Advice, UGG Shop, Men's Brands, Shop By Occasion, Weekend, Work, Golf, Vacation, Tuxedo & Formal Wear, Clothing, Blazers & Sport Coats, Coats & Jackets, Jeans, Lounge & Pajamas, Pants, Polo Shirts, Shirts, Shorts, Suits & Separates, Sweaters, Sweatshirts & Hoodies, Swimwear & Board Shorts, T-Shirts & Tank Tops, Underwear,  Boxers & Socks, Workout & Gym, Shoes, Boots, Comfort, Dress Shoes, Loafers & Slip-Ons, Oxfords & Derbys, Rain Boots, Sandals & Flip-Flops, Slippers, Sneakers & Athletic, Snow & Winter Boots, Wide Shoes, Narrow Shoes, Sizes 14 & Over Shoes, Sizes 7 & Under Shoes, Accessories, Bags & Backpacks, Belts & Suspenders, Hats,  Gloves & Scarves, Headphones, Jewelry & Cuff Links, Luggage & Travel, Phone Cases, Sunglasses & Eyewear, Ties & Pocket Squares, Wallets, Watches, Grooming & Cologne, Cologne, Holiday Gifts & Sets, Shaving & Beard Care, Skin Care, Tools & Travel Kits, Designer, Designer Clothing, Designer Shoes, Designer Accessories, Big & Tall, Clothing, Jeans, Pants, Shirts";
  
  navMenuOne = new NavMenu("Designer", this.listStringOne.split(", "));
  navMenuTwo = new NavMenu("Women", this.listStringTwo.split(", "));

  navMenuThree = new NavMenu("Men", this.listStringThree.split(", "));
  navMenuFour = new NavMenu("Kids", this.listStringThree.split(", "));
  navMenuFive = new NavMenu("Home & Gifts", this.listStringTwo.split(", "));
  navMenuSix = new NavMenu("Beauty", this.listStringTwo.split(", "));
  navMenuSeven = new NavMenu("Sale", this.listStringTwo.split(", "));
  navMenuEight = new NavMenu("What's Now", this.listStringTwo.split(", "));

  navMenus = [this.navMenuOne, this.navMenuTwo, this.navMenuThree, this.navMenuFour, this.navMenuFive, this.navMenuSix, this.navMenuSeven, this.navMenuEight];

  objectValues = Object.values;
  // indices;
  // getIndices () {
  //   let array = [];
  //   for(let i = 0 ; i <this.navMenus.length; i++) {
  //     array.push(i);
  //   }
  //   this.indices = array;
  // }
}
