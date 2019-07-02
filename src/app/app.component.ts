import { Component, ViewChild } from '@angular/core';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { TranslateService } from '@ngx-translate/core';
import { Config, Nav, Platform } from 'ionic-angular';
import * as firebase from 'firebase';
import { FIREBASE_CONFIG } from './app.firebase.config';
import { SmartAudioProvider } from '../providers/smart-audio/smart-audio'

import { FirstRunPage } from '../pages';
import { Settings } from '../providers';

@Component({
  template: `<ion-menu [content]="content">
    <ion-header>
      <ion-toolbar>
        <ion-title>Pages</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content>
      <ion-list>
        <button menuClose ion-item *ngFor="let p of pages" (click)="openPage(p)">
          {{p.title}}
        </button>
      </ion-list>
    </ion-content>

  </ion-menu>
  <ion-nav #content [root]="rootPage"></ion-nav>`
})
export class MyApp {
  rootPage = FirstRunPage;

  @ViewChild(Nav) nav: Nav;

  pages: any[] = [
    { title: 'Tutorial', component: 'TutorialPage' },
    { title: 'Welcome', component: 'WelcomePage' },
    { title: 'Tabs', component: 'TabsPage' },
    { title: 'Cards', component: 'CardsPage' },
    { title: 'Content', component: 'ContentPage' },
    { title: 'Login', component: 'LoginPage' },
    { title: 'Signup', component: 'SignupPage' },
    { title: 'Master Detail', component: 'ListMasterPage' },
    { title: 'Menu', component: 'MenuPage' },
    { title: 'Settings', component: 'SettingsPage' },
    { title: 'Search', component: 'SearchPage' }
  ]

  constructor(private translate: TranslateService,
    platform: Platform,
    settings: Settings,
    private config: Config,
    private statusBar: StatusBar,
    private splashScreen: SplashScreen,
    smartAudio: SmartAudioProvider) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();

      //Preload colores español
      smartAudio.preload('rojo_es', 'assets/audio/castellano/colores/rojo_es.mp3');
      smartAudio.preload('amarillo_es', 'assets/audio/castellano/colores/amarillo_es.mp3');
      smartAudio.preload('azul_es', 'assets/audio/castellano/colores/azul_es.mp3');
      smartAudio.preload('verde_es', 'assets/audio/castellano/colores/verde_es.mp3');
      smartAudio.preload('violeta_es', 'assets/audio/castellano/colores/violeta_es.mp3');
      smartAudio.preload('naranja_es', 'assets/audio/castellano/colores/naranja_es.mp3');

      //Preload colores ingles
      smartAudio.preload('rojo_en', 'assets/audio/ingles/colores/rojo_en.mp3');
      smartAudio.preload('amarillo_en', 'assets/audio/ingles/colores/amarillo_en.mp3');
      smartAudio.preload('azul_en', 'assets/audio/ingles/colores/azul_en.mp3');
      smartAudio.preload('verde_en', 'assets/audio/ingles/colores/verde_en.mp3');
      smartAudio.preload('violeta_en', 'assets/audio/ingles/colores/violeta_en.mp3');
      smartAudio.preload('naranja_en', 'assets/audio/ingles/colores/naranja_en.mp3');

      //Preload animales español
      smartAudio.preload('ciervo_es', 'assets/audio/castellano/animales/ciervo_es.mp3');
      smartAudio.preload('oso_es', 'assets/audio/castellano/animales/oso_es.mp3');
      smartAudio.preload('mapache_es', 'assets/audio/castellano/animales/mapache_es.mp3');
      smartAudio.preload('puercoespin_es', 'assets/audio/castellano/animales/puercoespin_es.mp3');
      smartAudio.preload('zorro_es', 'assets/audio/castellano/animales/zorro_es.mp3');
      smartAudio.preload('conejo_es', 'assets/audio/castellano/animales/conejo_es.mp3');

      //Preload animales ingles
      smartAudio.preload('ciervo_en', 'assets/audio/ingles/animales/ciervo_en.mp3');
      smartAudio.preload('oso_en', 'assets/audio/ingles/animales/oso_en.mp3');
      smartAudio.preload('mapache_en', 'assets/audio/ingles/animales/mapache_en.mp3');
      smartAudio.preload('puercoespin_en', 'assets/audio/ingles/animales/puercoespin_en.mp3');
      smartAudio.preload('zorro_en', 'assets/audio/ingles/animales/zorro_en.mp3');
      smartAudio.preload('conejo_en', 'assets/audio/ingles/animales/conejo_en.mp3');

      //Preload numeros español
      smartAudio.preload('1_es', 'assets/audio/castellano/numeros/1_es.mp3');
      smartAudio.preload('2_es', 'assets/audio/castellano/numeros/2_es.mp3');
      smartAudio.preload('3_es', 'assets/audio/castellano/numeros/3_es.mp3');
      smartAudio.preload('4_es', 'assets/audio/castellano/numeros/4_es.mp3');
      smartAudio.preload('5_es', 'assets/audio/castellano/numeros/5_es.mp3');
      smartAudio.preload('6_es', 'assets/audio/castellano/numeros/6_es.mp3');

      //Preload numeros ingles
      smartAudio.preload('1_en', 'assets/audio/ingles/numeros/1_en.mp3');
      smartAudio.preload('2_en', 'assets/audio/ingles/numeros/2_en.mp3');
      smartAudio.preload('3_en', 'assets/audio/ingles/numeros/3_en.mp3');
      smartAudio.preload('4_en', 'assets/audio/ingles/numeros/4_en.mp3');
      smartAudio.preload('5_en', 'assets/audio/ingles/numeros/5_en.mp3');
      smartAudio.preload('6_en', 'assets/audio/ingles/numeros/6_en.mp3');
    });
    this.initTranslate();
    firebase.initializeApp(FIREBASE_CONFIG);

  }

  initTranslate() {
    // Set the default language for translation strings, and the current language.
    this.translate.setDefaultLang('en');
    const browserLang = this.translate.getBrowserLang();

    if (browserLang) {
      if (browserLang === 'zh') {
        const browserCultureLang = this.translate.getBrowserCultureLang();

        if (browserCultureLang.match(/-CN|CHS|Hans/i)) {
          this.translate.use('zh-cmn-Hans');
        } else if (browserCultureLang.match(/-TW|CHT|Hant/i)) {
          this.translate.use('zh-cmn-Hant');
        }
      } else {
        this.translate.use(this.translate.getBrowserLang());
      }
    } else {
      this.translate.use('en'); // Set your language here
    }

    this.translate.get(['BACK_BUTTON_TEXT']).subscribe(values => {
      this.config.set('ios', 'backButtonText', values.BACK_BUTTON_TEXT);
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }

}
