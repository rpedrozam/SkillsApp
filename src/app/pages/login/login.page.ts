import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage  {

  constructor(private authSvc: AuthService, private router: Router, private alertController: AlertController) { }


  async onLogin (email, password) {
    try {
      const user = await this.authSvc.login(email.value, password.value);
      if (user) {
        this.redirectUserHome();
      }else{
        this.presentAlert('Error', "An error ocurred while signing in");
      }
    } catch (error) {
      console.log('Error:', error);
      this.presentAlert('Error', "An error ocurred while signing in");
    }
  }

  redirectUserHome (){
    this.router.navigate(['home']);
  }

  redirectUserRegister (){
    this.router.navigate(['register']);
  }

  async presentAlert(status: string, message: string) {
    const alert = await this.alertController.create({
      header: status,
      subHeader: message,
      buttons: ['OK']
    });
    await alert.present();
  }

}
