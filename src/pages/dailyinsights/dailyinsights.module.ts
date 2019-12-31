import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DailyinsightsPage } from './dailyinsights';

@NgModule({
  declarations: [
    DailyinsightsPage,
  ],
  imports: [
    IonicPageModule.forChild(DailyinsightsPage),
  ],
})
export class DailyinsightsPageModule {}
