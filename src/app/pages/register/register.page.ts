import { Component} from '@angular/core';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage {

  constructor(private authSvc: AuthService, private router: Router, private alertController: AlertController) { }


  async onRegister (email, password, confirm_password) {

    console.log('Datos',password + confirm_password);
    
    if (password.value == confirm_password.value) {
      this.onGoRegister(email, password);
    } else {
      this.presentAlert('Error', "Passwords do not match");
    }
  }


  async onGoRegister (email, password) {
      try {
        const user = await this.authSvc.register(email.value, password.value);
        if (user) {
          this.redirectUserHome();
        }else{
          this.presentAlert('Error', "An error ocurred while signing up");
        }
      } catch (error) {
        console.log('Error:', error);
        this.presentAlert('Error', "An error ocurred while signing up");
      }
  }

  redirectUserHome (){
    this.router.navigate(['home']);
  }

  redirectUserLogin (){
    this.router.navigate(['login']);
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
