import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { NewreleasesPage } from './newreleases';

@NgModule({
  declarations: [
    NewreleasesPage,
  ],
  imports: [
    IonicPageModule.forChild(NewreleasesPage),
  ],
})
export class NewreleasesPageModule {}
