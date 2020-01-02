import { Component } from '@angular/core';
import { NavController, ModalController } from 'ionic-angular';
import { DailyinsightsPage } from '../dailyinsights/dailyinsights';
import { TodayforyouPage } from '../todayforyou/todayforyou';
import { NewreleasesPage } from '../newreleases/newreleases';
import { CommingsoonPage } from '../commingsoon/commingsoon';
import { AllbooksPage } from '../allbooks/allbooks';
import { BookdetailPage } from '../bookdetail/bookdetail';
import { SearchareaPage } from '../searcharea/searcharea';

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
        "cover": "assets/imgs/bookcover.jpg",
        "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus repudiandae atque doloribus assumenda repellat, ipsam nam temporibus! Recusandae accusamus perspiciatis harum consequuntur corporis vitae, quo dolore, cum laboriosam, obcaecati dignissimos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui, delectus perspiciatis? Corporis dolores ipsum cumque quis labore quam quidem exercitationem. Reprehenderit sit, quidem doloremque quaerat culpa provident labore vel consequatur! Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui, delectus perspiciatis? Corporis dolores ipsum cumque quis labore quam quidem exercitationem. Reprehenderit sit, quidem doloremque quaerat culpa provident labore vel consequatur! Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui, delectus perspiciatis? Corporis dolores ipsum cumque quis labore quam quidem exercitationem. Reprehenderit sit, quidem doloremque quaerat culpa provident labore vel consequatur! Lorem ipsum dolor sit amet consectetur adipisicing elit."
      },
      {
        "title": "Book Title",
        "category": "Category Name",
        "author": "Author Name2",
        "cover": "assets/imgs/bookcover.jpg",
        "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus repudiandae atque doloribus assumenda repellat, ipsam nam temporibus! Recusandae accusamus perspiciatis harum consequuntur corporis vitae, quo dolore, cum laboriosam, obcaecati dignissimos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui, delectus perspiciatis? Corporis dolores ipsum cumque quis labore quam quidem exercitationem. Reprehenderit sit, quidem doloremque quaerat culpa provident labore vel consequatur! Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui, delectus perspiciatis? Corporis dolores ipsum cumque quis labore quam quidem exercitationem. Reprehenderit sit, quidem doloremque quaerat culpa provident labore vel consequatur! Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui, delectus perspiciatis? Corporis dolores ipsum cumque quis labore quam quidem exercitationem. Reprehenderit sit, quidem doloremque quaerat culpa provident labore vel consequatur! Lorem ipsum dolor sit amet consectetur adipisicing elit."
      },
      {
        "title": "Book Title",
        "category": "Category Name",
        "author": "Author Name3",
        "cover": "assets/imgs/bookcover.jpg",
        "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus repudiandae atque doloribus assumenda repellat, ipsam nam temporibus! Recusandae accusamus perspiciatis harum consequuntur corporis vitae, quo dolore, cum laboriosam, obcaecati dignissimos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui, delectus perspiciatis? Corporis dolores ipsum cumque quis labore quam quidem exercitationem. Reprehenderit sit, quidem doloremque quaerat culpa provident labore vel consequatur! Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui, delectus perspiciatis? Corporis dolores ipsum cumque quis labore quam quidem exercitationem. Reprehenderit sit, quidem doloremque quaerat culpa provident labore vel consequatur! Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui, delectus perspiciatis? Corporis dolores ipsum cumque quis labore quam quidem exercitationem. Reprehenderit sit, quidem doloremque quaerat culpa provident labore vel consequatur! Lorem ipsum dolor sit amet consectetur adipisicing elit."
      },
      {
        "title": "Book Title",
        "category": "Category Name",
        "author": "Author Name4",
        "cover": "assets/imgs/bookcover.jpg",
        "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus repudiandae atque doloribus assumenda repellat, ipsam nam temporibus! Recusandae accusamus perspiciatis harum consequuntur corporis vitae, quo dolore, cum laboriosam, obcaecati dignissimos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui, delectus perspiciatis? Corporis dolores ipsum cumque quis labore quam quidem exercitationem. Reprehenderit sit, quidem doloremque quaerat culpa provident labore vel consequatur! Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui, delectus perspiciatis? Corporis dolores ipsum cumque quis labore quam quidem exercitationem. Reprehenderit sit, quidem doloremque quaerat culpa provident labore vel consequatur! Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui, delectus perspiciatis? Corporis dolores ipsum cumque quis labore quam quidem exercitationem. Reprehenderit sit, quidem doloremque quaerat culpa provident labore vel consequatur! Lorem ipsum dolor sit amet consectetur adipisicing elit."
      },
      {
        "title": "Book Title",
        "category": "Category Name",
        "author": "Author Name5",
        "cover": "assets/imgs/bookcover.jpg",
        "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus repudiandae atque doloribus assumenda repellat, ipsam nam temporibus! Recusandae accusamus perspiciatis harum consequuntur corporis vitae, quo dolore, cum laboriosam, obcaecati dignissimos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui, delectus perspiciatis? Corporis dolores ipsum cumque quis labore quam quidem exercitationem. Reprehenderit sit, quidem doloremque quaerat culpa provident labore vel consequatur! Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui, delectus perspiciatis? Corporis dolores ipsum cumque quis labore quam quidem exercitationem. Reprehenderit sit, quidem doloremque quaerat culpa provident labore vel consequatur! Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui, delectus perspiciatis? Corporis dolores ipsum cumque quis labore quam quidem exercitationem. Reprehenderit sit, quidem doloremque quaerat culpa provident labore vel consequatur! Lorem ipsum dolor sit amet consectetur adipisicing elit."
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
        "name": "Best Books of 2019",
        "image": "assets/imgs/collections.jpg"
      },
      {
        "name": "Malcolm Galdwell",
        "image": "assets/imgs/collections.jpg"
      },
      {
        "name": "Top-5 to Launch Unicorn Startup",
        "image": "assets/imgs/collections.jpg"
      },
      {
        "name": "Top-5 to Become a High Performer",
        "image": "assets/imgs/collections.jpg"
      },
      {
        "name": "Top-5 to Win at Work",
        "image": "assets/imgs/collections.jpg"
      },
      {
        "name": "Top-5 to get Smarter",
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

  openSearch() {
    const modal = this.modalCtrl.create(SearchareaPage);
    modal.present();
  }

}
