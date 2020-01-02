import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';

/**
 * Generated class for the SearchareaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-searcharea',
  templateUrl: 'searcharea.html',
})
export class SearchareaPage {
  searchList: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl: ViewController) {
    this.loadDemo();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SearchareaPage');
  }

  loadDemo() {
    this.searchList = [
      {
        "title": "The 7 Habits of Highly Effective People",
        "image": "assets/imgs/bookcover.jpg",
        "author": "Stephen Covey",
        "category": "Productivity"
      },
      {
        "title": "The 7 Habits of Highly Effective People",
        "image": "assets/imgs/bookcover.jpg",
        "author": "Stephen Covey",
        "category": "Productivity2"
      },
      {
        "title": "The 7 Habits of Highly Effective People",
        "image": "assets/imgs/bookcover.jpg",
        "author": "Stephen Covey",
        "category": "Productivity3"
      },
      {
        "title": "The 7 Habits of Highly Effective People",
        "image": "assets/imgs/bookcover.jpg",
        "author": "Stephen Covey",
        "category": "Productivity4"
      }
    ];
  }

}
