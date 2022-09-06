import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.page.html',
  styleUrls: ['./alert.page.scss'],
})
export class AlertPage implements OnInit {

  constructor(private alertController: AlertController) { }

  ngOnInit() {
  }

  onClick(){
    this.presentAlert();
  }

  async presentAlert() {
    const alert = await this.alertController.create({
      backdropDismiss: false,
      header: 'Alert',
      subHeader: 'Important message',
      message: 'This is an alert!',
      buttons: ['OK'],
    });

    await alert.present();
  }

  async presentAlertMultipleButtons() {
    const alert = await this.alertController.create({
      backdropDismiss: false,
      header: 'Alert',
      subHeader: 'Important message',
      message: 'This is an alert message!',
      buttons: ['OK', 'Cancel', 'Open Modal', 'Delete'],
    });

    await alert.present();
  }


  async presentAlertForm() {
    const alert = await this.alertController.create({
      header: 'Please enter your info',
      buttons: [
        {
        text: 'Cancel',
        role:'cancel',
        cssClass: 'secondary',
        handler: ()=> {
          console.log('Confirm Cancel');
        }
      },
      {
        text: 'Ok',
        handler: (data:any)=>{
          console.log('Confirm Ok');
          console.log(data);
        }
      }
    ],
      inputs: [
        {
          placeholder: 'Name',
        },
        {
          placeholder: 'Nickname (max 8 characters)',
          attributes: {
            maxlength: 8,
          },
        },
        {
          type: 'number',
          placeholder: 'Age',
          min: 1,
          max: 100,
        },
        {
          type: 'textarea',
          placeholder: 'A little about yourself',
        },
      ],
    });

    await alert.present();
  }

}
