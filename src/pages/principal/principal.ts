import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';
import { ModalIdiomasPage } from '../modal-idiomas/modal-idiomas';
import { ModalCosasPage } from '../modal-cosas/modal-cosas';
import { SmartAudioProvider } from "../../providers/smart-audio/smart-audio";

/**
 * Generated class for the PrincipalPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-principal',
  templateUrl: 'principal.html',
})
export class PrincipalPage {
  idioma: number = 1;
  tema: number = 1;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public modal: ModalController,
    public smartAudio: SmartAudioProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PrincipalPage');
  }

  openModalLanguage() {
    let myLanguageModal = this.modal.create(ModalIdiomasPage);
    myLanguageModal.onDidDismiss(data => {
      this.idioma = data;
    });
    myLanguageModal.present();
  }

  openModalThings() {
    let myThingsModal = this.modal.create(ModalCosasPage);
    myThingsModal.onDidDismiss(data => {
      this.tema = data;
    });
    myThingsModal.present();
  }

  playSound(sonido: string) {
    if (this.idioma == 1) {
      // this.smartAudio.play(sonido + "_es");

      let audio = new Audio();
      audio.src = '../../assets/sonidos/' + sonido + '_es.mp3';
      console.log(audio.src);
      audio.load();
      audio.play();
    }

    if (this.idioma == 2){
      // this.smartAudio.play(sonido + "_en");
      
      let audio = new Audio();
      audio.src = '../../assets/sonidos/' + sonido + '_en.mp3';
      console.log(audio.src);
      audio.load();
      audio.play();
    }
  }

}
