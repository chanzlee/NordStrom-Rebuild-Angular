import { Component, OnInit } from '@angular/core';
import { Data } from '../model/data';

@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.css']
})
export class DataComponent{

  row1col1 = new Data("Our New Rewards Program Is Here!","Fashion access, exclusive services and amazing experiences—plus points toward Nordstrom Notes. Get rewards you'll love just for shopping with us.", "Learn More", "https://shop.nordstrom.com/content/nordy-club?%3B&cm_sp=merch-_-corp_6749_j009165-_-hp_corp_p00_info&jid=j009165-6749" )

  row1col2 = new Data("Upload Your Selfie","Snap a pic and we'll create your custom Nordy portrait—because we're all about personalizing your rewards. Download the Nordstrom app to get started.", "Download the App", "https://shop.nordstrom.com/content/nordstrom-apps?cm_sp=merch-_-corp_6749_j009165-_-hp_corp_p00_info&jid=j009165-6749")

  row2col1 = new Data("New & Only Here","The East Coast-meets-West Coast vibe of mega influencer Blair Eadie plus the modern ease and versatility of Halogen—select styles up to size 24. This collection is going to transform your closet.","Shop Now", "https://shop.nordstrom.com/c/halogen-atlantic-pacific-all?campaign=1022halogenaphpa&jid=j009296-5965&cid=wiif4&cm_sp=merch-_-npg_5965_j009296-_-mowhp_corp_p01_shop")


}
