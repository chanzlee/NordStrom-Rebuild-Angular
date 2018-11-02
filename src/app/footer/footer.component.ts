import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {
  footer1= "Customer Service  Contact Us  Pay Bill Online  Order Status  Shipping  Returns & Exchanges  Product Recalls  Give Us Feedback".split("  ");
  footer2= "United States  About Us  Stores & Events  Careers  Nordstrom Cares  Site Map  Get Email Updates  Blogs + More".split("  ");
  footer3="Services  The Nordy Club  Apply for a Nordstrom Card  Stylists  Alterations & Tailoring  Spa Nordstrom  Nordstrom Restaurants  Gift Cards".split("  ");
  footer4="Nordstrom, Inc.  Nordstrom Rack  Nordstrom Canada  HauteLook  Trunk Club  Investor Relations  Press Releases".split('  ');

  footers: string[][] = [this.footer1, this.footer2, this.footer3, this.footer4];
}
