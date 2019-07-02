import { Component } from '@angular/core';
import { NavController, NavParams, ModalController, ViewController } from 'ionic-angular';

/**
 * Generated class for the ModalIdiomasPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-modal-idiomas',
  templateUrl: 'modal-idiomas.html',
})
export class ModalIdiomasPage {

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public modalCtrl: ModalController,
    public viewCtrl: ViewController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ModalIdiomasPage');
  }

  enviarDatos(idioma: number){
    this.viewCtrl.dismiss(idioma);
  }
}
