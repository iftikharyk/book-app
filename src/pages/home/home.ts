import { Component } from '@angular/core';
import { NavController, ModalController } from 'ionic-angular';
import { DailyinsightsPage } from '../dailyinsights/dailyinsights';
import { TodayforyouPage } from '../todayforyou/todayforyou';
import { NewreleasesPage } from '../newreleases/newreleases';
import { CommingsoonPage } from '../commingsoon/commingsoon';
import { AllbooksPage } from '../allbooks/allbooks';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, public modalCtrl: ModalController) {

  }

  openDailyInsights() {
    const modal = this.modalCtrl.create(DailyinsightsPage);
    modal.present();
  }

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

}
