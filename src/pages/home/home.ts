import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { AboutPage } from '../../pages/about/about';
import { ContactPage } from '../../pages/contact/contact';
import { HomePage1 } from '../../pages/pagehome/pagehome';



@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})


export class HomePage {

	tab1Root = HomePage1;
	tab2Root = AboutPage;
	tab3Root = ContactPage;

  constructor(public navCtrl: NavController) {

  }

}
