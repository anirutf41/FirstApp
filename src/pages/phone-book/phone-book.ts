import { Component } from '@angular/core';
import { IonicPage, NavController} from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-phone-book',
  templateUrl: 'phone-book.html',
})
export class PhoneBookPage {

  contactArray = [
    {name:'เรวัต', telephone:'0689548525', imageUrl: 'assets/imgs/re.jpg'},
    {name:'จอร์ส', telephone:'0857452156', imageUrl: 'assets/imgs/jos.jpg'},
    {name:'มอส', telephone:'0854985125', imageUrl: 'assets/imgs/moss.jpg'},
    {name:'นปัล', telephone:'0965487452', imageUrl: 'assets/imgs/pun.jpg'}
  ];

  constructor(public navCtrl: NavController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PhoneBookPage');
  }
  viewDetail(item){
    this.navCtrl.push("PhoneBookDetailPage",item)
  }
}//end
