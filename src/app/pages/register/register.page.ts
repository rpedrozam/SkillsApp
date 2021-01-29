import { Component} from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage {

  constructor(private authSvc: AuthService, private router: Router) { }


  async onRegister (email, password) {
      try {
        const user = await this.authSvc.register(email.value, password.value);
        console.log(user);
      } catch (error) {
        console.log('Error:', error);
      }
  }

  redirectUserHome (){
    //Go to home
    //this.router.navigate(['register']);
  }

  redirectUserLogin (){
    this.router.navigate(['login']);
  }

}
