import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { BasicPage } from '../pages/action-sheets/basic/pages';
import { BasicAlertPage } from '../pages/alerts/basic/pages';
import { CheckboxPage } from '../pages/alerts/checkbox/pages';

import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage1 } from '../pages/pagehome/pagehome';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    AboutPage,
    ContactPage,
    HomePage1,
    BasicPage,
    BasicAlertPage,
    CheckboxPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    AboutPage,
    ContactPage,
    HomePage1,
    BasicPage,
    BasicAlertPage,
    CheckboxPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
