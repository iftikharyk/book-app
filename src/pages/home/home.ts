import { Component } from '@angular/core';
import { NavController, ModalController } from 'ionic-angular';
import { DailyinsightsPage } from '../dailyinsights/dailyinsights';

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

}
