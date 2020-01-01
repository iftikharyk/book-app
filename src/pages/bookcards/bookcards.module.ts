import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { BookcardsPage } from './bookcards';

@NgModule({
  declarations: [
    BookcardsPage,
  ],
  imports: [
    IonicPageModule.forChild(BookcardsPage),
  ],
})
export class BookcardsPageModule {}
