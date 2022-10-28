import { Component } from '@angular/core';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { Platform } from '@ionic/angular';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
  ) {
    this.platform.ready().then(() => {
      console.log('voy a esconder el splash');
      this.splashScreen.hide();
      console.log('se escondio el splash');
    });
  }
}
