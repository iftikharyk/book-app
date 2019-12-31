import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { ProfilePage } from '../pages/profile/profile';
import { TabsPage } from '../pages/tabs/tabs';
import { LoginPage } from '../pages/login/login';
import { RegisterPage } from '../pages/register/register';
import { DailyinsightsPage } from '../pages/dailyinsights/dailyinsights';
import { AllbooksPage } from '../pages/allbooks/allbooks';
import { CommingsoonPage } from '../pages/commingsoon/commingsoon';
import { NewreleasesPage } from '../pages/newreleases/newreleases';
import { TodayforyouPage } from '../pages/todayforyou/todayforyou';
import { BookdetailPage } from '../pages/bookdetail/bookdetail';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    ProfilePage,
    TabsPage,
    LoginPage,
    RegisterPage,
    DailyinsightsPage,
    AllbooksPage,
    CommingsoonPage,
    NewreleasesPage,
    TodayforyouPage,
    BookdetailPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    ProfilePage,
    TabsPage,
    LoginPage,
    RegisterPage,
    DailyinsightsPage,
    AllbooksPage,
    CommingsoonPage,
    NewreleasesPage,
    TodayforyouPage,
    BookdetailPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
