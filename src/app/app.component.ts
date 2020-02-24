import { Component, OnInit } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent implements OnInit {
  public appPages = [
    {
      title: 'Αρχική',
      url: '/home',
      icon: 'home'
    },
    {
      title: 'Κατηγορίες',
      url: '/categories',
      icon: 'list'
    },
    {
      title: 'Για εμάς',
      url: '/about',
      icon: 'information-circle'
    },
    {
      title: 'Επικοινωνία',
      url: '/contact',
      icon: 'mail'
    },
  ];

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  ngOnInit() {
  }
}
