import { Component } from '@angular/core';
import { NavController, ModalController } from 'ionic-angular';
import { DailyinsightsPage } from '../dailyinsights/dailyinsights';
import { TodayforyouPage } from '../todayforyou/todayforyou';
import { NewreleasesPage } from '../newreleases/newreleases';
import { CommingsoonPage } from '../commingsoon/commingsoon';
import { AllbooksPage } from '../allbooks/allbooks';
import { BookdetailPage } from '../bookdetail/bookdetail';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  books: any;
  categories: any;
  collections: any;

  constructor(public navCtrl: NavController, public modalCtrl: ModalController) {
    this.loadDemoData();
    // console.log(this.books);
  }



  loadDemoData() {
    this.books = [
      {
        "title": "Book Title",
        "category": "Category Name",
        "author": "Author Name",
        "cover": "assets/imgs/bookcover.jpg"
      },
      {
        "title": "Book Title",
        "category": "Category Name",
        "author": "Author Name2",
        "cover": "assets/imgs/bookcover.jpg"
      },
      {
        "title": "Book Title",
        "category": "Category Name",
        "author": "Author Name3",
        "cover": "assets/imgs/bookcover.jpg"
      },
      {
        "title": "Book Title",
        "category": "Category Name",
        "author": "Author Name4",
        "cover": "assets/imgs/bookcover.jpg"
      },
      {
        "title": "Book Title",
        "category": "Category Name",
        "author": "Author Name5",
        "cover": "assets/imgs/bookcover.jpg"
      }
    ];

    this.categories = [
      {
        "name": "Business & Finance",
        "image": "ios-speedometer"
      },
      {
        "name": "Spirituality",
        "image": "ios-speedometer"
      },
      {
        "name": "Thiller",
        "image": "ios-speedometer"
      },
      {
        "name": "Fiction",
        "image": "ios-speedometer"
      },
      {
        "name": "Non-Fiction",
        "image": "ios-speedometer"
      },
      {
        "name": "Productivity",
        "image": "ios-speedometer"
      },
      {
        "name": "Money & Career",
        "image": "ios-speedometer"
      },
      {
        "name": "Love & Family",
        "image": "ios-speedometer"
      },
      {
        "name": "Fitness & Health",
        "image": "ios-speedometer"
      }
    ];

    this.collections = [
      {
        "name": "Collection of books",
        "image": "assets/imgs/collections.jpg"
      },
      {
        "name": "Collection of books",
        "image": "assets/imgs/collections.jpg"
      },
      {
        "name": "Collection of books",
        "image": "assets/imgs/collections.jpg"
      },
      {
        "name": "Collection of books",
        "image": "assets/imgs/collections.jpg"
      },
      {
        "name": "Collection of books",
        "image": "assets/imgs/collections.jpg"
      },
      {
        "name": "Collection of books",
        "image": "assets/imgs/collections.jpg"
      }
    ];
  };

  openTodayForYou() {
    this.navCtrl.push(TodayforyouPage);
  }

  openNewReleases() {
    this.navCtrl.push(NewreleasesPage);
  }

  openComingSoon() {
    this.navCtrl.push(CommingsoonPage);
  }

  openAllBooks() {
    this.navCtrl.push(AllbooksPage);
  }

  openDailyInsights() {
    const modal = this.modalCtrl.create(DailyinsightsPage);
    modal.present();
  }

  getBookDetail() {
    const modal = this.modalCtrl.create(BookdetailPage);
    modal.present();
  }

}
