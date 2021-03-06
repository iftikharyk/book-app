import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';

/**
 * Generated class for the DailyinsightsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-dailyinsights',
  templateUrl: 'dailyinsights.html',
})
export class DailyinsightsPage {
  dailyCards: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl: ViewController) {
    this.loadCardDemo();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DailyinsightsPage');
  }

  loadCardDemo() {
    this.dailyCards = [
      {
        "text": "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquam exercitationem ut porro. Sunt consequatur laborum neque temporibus voluptate, sed praesentium? Corrupti quibusdam est atque eos praesentium id reiciendis soluta voluptate! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquam exercitationem ut porro. Sunt consequatur laborum neque temporibus voluptate, sed praesentium? Corrupti quibusdam est atque eos praesentium id reiciendis soluta voluptate! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquam exercitationem ut porro. Sunt consequatur laborum neque temporibus voluptate, sed praesentium? Corrupti quibusdam est atque eos praesentium id reiciendis soluta voluptate! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquam exercitationem ut porro. Sunt consequatur laborum neque temporibus voluptate, sed praesentium? Corrupti quibusdam est atque eos praesentium id reiciendis soluta voluptate!"
      },
      {
        "text": "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquam exercitationem ut porro. Sunt consequatur laborum neque temporibus voluptate, sed praesentium? Corrupti quibusdam est atque eos praesentium id reiciendis soluta voluptate! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquam exercitationem ut porro. Sunt consequatur laborum neque temporibus voluptate, sed praesentium? Corrupti quibusdam est atque eos praesentium id reiciendis soluta voluptate! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquam exercitationem ut porro. Sunt consequatur laborum neque temporibus voluptate, sed praesentium? Corrupti quibusdam est atque eos praesentium id reiciendis soluta voluptate! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquam exercitationem ut porro. Sunt consequatur laborum neque temporibus voluptate, sed praesentium? Corrupti quibusdam est atque eos praesentium id reiciendis soluta voluptate!"
      },
      {
        "text": "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquam exercitationem ut porro. Sunt consequatur laborum neque temporibus voluptate, sed praesentium? Corrupti quibusdam est atque eos praesentium id reiciendis soluta voluptate! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquam exercitationem ut porro. Sunt consequatur laborum neque temporibus voluptate, sed praesentium? Corrupti quibusdam est atque eos praesentium id reiciendis soluta voluptate! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquam exercitationem ut porro. Sunt consequatur laborum neque temporibus voluptate, sed praesentium? Corrupti quibusdam est atque eos praesentium id reiciendis soluta voluptate! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquam exercitationem ut porro. Sunt consequatur laborum neque temporibus voluptate, sed praesentium? Corrupti quibusdam est atque eos praesentium id reiciendis soluta voluptate!"
      },
      {
        "text": "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquam exercitationem ut porro. Sunt consequatur laborum neque temporibus voluptate, sed praesentium? Corrupti quibusdam est atque eos praesentium id reiciendis soluta voluptate! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquam exercitationem ut porro. Sunt consequatur laborum neque temporibus voluptate, sed praesentium? Corrupti quibusdam est atque eos praesentium id reiciendis soluta voluptate! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquam exercitationem ut porro. Sunt consequatur laborum neque temporibus voluptate, sed praesentium? Corrupti quibusdam est atque eos praesentium id reiciendis soluta voluptate! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquam exercitationem ut porro. Sunt consequatur laborum neque temporibus voluptate, sed praesentium? Corrupti quibusdam est atque eos praesentium id reiciendis soluta voluptate!"
      },
      {
        "text": "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquam exercitationem ut porro. Sunt consequatur laborum neque temporibus voluptate, sed praesentium? Corrupti quibusdam est atque eos praesentium id reiciendis soluta voluptate! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquam exercitationem ut porro. Sunt consequatur laborum neque temporibus voluptate, sed praesentium? Corrupti quibusdam est atque eos praesentium id reiciendis soluta voluptate! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquam exercitationem ut porro. Sunt consequatur laborum neque temporibus voluptate, sed praesentium? Corrupti quibusdam est atque eos praesentium id reiciendis soluta voluptate! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquam exercitationem ut porro. Sunt consequatur laborum neque temporibus voluptate, sed praesentium? Corrupti quibusdam est atque eos praesentium id reiciendis soluta voluptate!"
      },
      {
        "text": "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquam exercitationem ut porro. Sunt consequatur laborum neque temporibus voluptate, sed praesentium? Corrupti quibusdam est atque eos praesentium id reiciendis soluta voluptate! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquam exercitationem ut porro. Sunt consequatur laborum neque temporibus voluptate, sed praesentium? Corrupti quibusdam est atque eos praesentium id reiciendis soluta voluptate! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquam exercitationem ut porro. Sunt consequatur laborum neque temporibus voluptate, sed praesentium? Corrupti quibusdam est atque eos praesentium id reiciendis soluta voluptate! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquam exercitationem ut porro. Sunt consequatur laborum neque temporibus voluptate, sed praesentium? Corrupti quibusdam est atque eos praesentium id reiciendis soluta voluptate!"
      }
    ];
  }

}
