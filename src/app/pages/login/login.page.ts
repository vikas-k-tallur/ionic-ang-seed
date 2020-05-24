import { Component, OnInit } from '@angular/core';
import { CapacitorStorageService } from 'src/app/services/capacitor-storage.service';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { ToastService } from 'src/app/services/toast.service';
import { Router } from '@angular/router';
import { AppConstants } from 'src/app/config/application-constant';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor( private router: Router,
    private authenticationService: AuthenticationService,
    private storageService: CapacitorStorageService,
    private toastService: ToastService) { }
  loginFormData = {
    username: '',
    password: ''
  };

  validateLoginForm() {
    let username = this.loginFormData.username.trim();
    let password = this.loginFormData.password.trim();
    return (
      this.loginFormData.username &&
      this.loginFormData.password &&
      username.length > 0 &&
      password.length > 0
    );    
  }

  login() {
    if (this.validateLoginForm()) {
      this.authenticationService.login(this.loginFormData).subscribe(
        (res: any) => {
          if (res.userData) {
            // Storing the User data.
            this.storageService
              .set(AppConstants.USER, res.userData)
              .then(res => {
                this.router.navigate(['secure/home']);
              });
          } else {
            this.toastService.presentToast('Incorrect username or password.','danger');
          }
        },
        (error: any) => {
          this.toastService.presentToast('Network Issue.','danger');
        }
      );
    } else {
      this.toastService.presentToast('Please enter username or password.','danger');
    }
  }
  ngOnInit() {
  }

}
