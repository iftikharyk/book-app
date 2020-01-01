import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController, ModalController } from 'ionic-angular';
import { BookcardsPage } from '../bookcards/bookcards';

/**
 * Generated class for the BookdetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-bookdetail',
  templateUrl: 'bookdetail.html',
})
export class BookdetailPage {
  books: any;
  categories: any;
  collections: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl: ViewController, public modalCtrl: ModalController) {
    this.loadDemoData();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BookdetailPage');
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

  openCards() {
    const modal = this.modalCtrl.create(BookcardsPage);
    modal.present();
  }
}
