import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  //property
  loginResult;

  constructor(public navCtrl: NavController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }
  signIn(i_username,i_password){
    alert("Hello world "+i_username+" "+i_password);
    if(i_password == '123'){
      this.loginResult = "PASSSSSS "+i_username;
      this.navCtrl.push("PhoneBookPage");
    }else{
      this.loginResult = "FAILEDDD";
    }
  }
}//end
