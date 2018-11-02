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
  listStringFour="Holiday Gifts For Kids, New Arrivals, Toy Shop, Designer, All Kids' Shoes, UGG Shop, Special Occasions, Holiday Shop, Sleepover Essentials, Maternity, Kids' Brands, Girls, Girls (Sizes 2T-6X), Girls (Sizes 7-16), Tween Girls, Accessories, Activewear, Coats & Jackets, Dresses & Rompers, Jeans, Pajamas & Robes, Swimsuits & Cover-ups, Tops, Girls' Shoes, Toddler (Sizes 7.5-12), Little Kid (Sizes 12.5-3), Big Kid (Sizes 3.5-7), Boots & Booties, Sneakers & Athletic, Boys, Boys (Sizes 2T-7), Boys (Sizes 8-20), Tween Boys, Accessories, Activewear, Coats & Jackets, Jeans, Pajamas & Robes, Shirts & Tops, Suits & Separates, Swim Trunks & Rashguards, Boys' Shoes, Toddler (Sizes 7.5-12), Little Kid (Sizes 12.5-3), Big Kid (Sizes 3.5-7), Boots, Sneakers & Athletic, Baby, Accessories, Baby Girl Clothing, Baby Boy Clothing, Unisex Baby Clothing, Baby Shower Gifts, Baby & Walker Shoes, Girl Baby & Walker Shoes, Boy Baby & Walker Shoes, Unisex Baby & Walker Shoes, First Walker Shoes, Boots, Baby Gear & Essentials, Baby Carriers, Bath & Potty, Blankets & Swaddles, Car Seats, Diaper Bags, Feeding, Health & Safety, High Chairs, Nursery & Decor, Strollers";

  listStringFive="Holiday Gifts for Home, Wit & Wonder Gift Shop, New Arrivals, Nordstrom-Exclusive Brands, Anthropologie Home, Candy Shop, Personalized Shop, Pop-In: MCM, Home Brands, Bedding, Luxury Bedding, Bedding Sets, Blankets & Throws, Comforters & Quilts, Decorative Pillows, Duvet Covers & Shams, Sheets & Bed Skirts, Bath, Luxury Bath, Bath Accessories, Rugs & Mats, Towels, Baby & Kids, Bath, Bedding, Furniture & Decor, Holiday Decor, Thanksgiving, Hanukkah, Christmas, Home Decor, Luxury Home Decor, Art, Wall Decor & Mirrors, Candles & Diffusers, Decorative Accents, Desk Accessories & Stationery, Lighting & Lamps, Picture Frames, Pillows & Throw Blankets, Rugs, Furniture, Tabletop & Kitchen, Bar Accessories, Cookware & Bakeware, Dinnerware, Drinkware & Glassware, Flatware & Utensils, Serveware, Small Appliances, Electronic & Tech Accessories, Headphones, Smart Home, Speakers & Home Audio, Luggage & Travel, Gifts, eGift Cards, Gift Cards, Gifts for Her, Gifts for Him, Gifts for Kids, Gifts for Baby, Occasion, Anniversary, Baby Shower, Birthday, Graduation, Housewarming, Wedding";

  listStringSix="Holiday Gifts & Sets, New Arrivals, Gifts with Purchase, 3 Free Samples with Purchase, Bestsellers, Nordstrom Exclusives, Allure Best of Beauty 2018, Fall Beauty Trends & Events, Beauty Services, Beauty Brands, Bobbi Brown, CHANEL, Charlotte Tilbury, Clinique, Estée Lauder, Jo Malone London, Kiehl's, La Mer, Lancôme, Le Labo, MAC Cosmetics, NARS, TOM FORD, Trish McEvoy, Yves Saint Laurent, Makeup, Blush, Bronzer, Brushes & Tools, Concealer, Contouring, Eyebrows, Eyeliner, Eyeshadow, False Eyelashes, Foundation, Highlighter, Lipstick, Lip Gloss & Liner, Mascara, Nail Polish & Care, Powder & Setting Spray, Primer, Skin Care, Cleansers, Exfoliators & Peels, Eye Creams & Treatments, Face Masks, Face Mists & Essences, Face Moisturizers, Lip Balms & Treatments, Makeup Remover, Serums, Sun Care & Sunscreens, Toners, Tools & Devices, Fragrance, Candles & Diffusers, Perfume, Rollerball & Travel Size, Hair Care, Hair & Scalp Treatments, Hair Dryers & Styling Tools, Hair Styling Products, Shampoo & Conditioner, Tools & Brushes, Natural Beauty & Wellness, Bath & Body";

  listStringSeven="Women, New Markdowns, Clothing, Shoes, Handbags & Accessories, Beauty & Fragrance, Designer, Plus, Petite, Juniors, Maternity, Men, New Markdowns, Clothing, Shoes, Accessories, Designer, Kids, New Markdowns, Girls, Boys, Baby, Baby Gear & Essentials, Shoes, Home, New Markdowns, Bedding, Bath, Home Decor, Tabletop & Kitchen";
  
  navMenuOne = new NavMenu("Designer", this.listStringOne.split(", "));
  navMenuTwo = new NavMenu("Women", this.listStringTwo.split(", "));

  navMenuThree = new NavMenu("Men", this.listStringThree.split(", "));
  navMenuFour = new NavMenu("Kids", this.listStringFour.split(", "));
  navMenuFive = new NavMenu("Home", this.listStringFive.split(", "));
  navMenuSix = new NavMenu("Beauty", this.listStringSix.split(", "));
  navMenuSeven = new NavMenu("Sale", this.listStringSeven.split(", "));
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
