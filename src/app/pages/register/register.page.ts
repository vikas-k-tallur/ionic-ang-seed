import { Component, OnInit } from '@angular/core';
import { ToastService } from 'src/app/services/toast.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  constructor( private toastService: ToastService) { }

  ngOnInit() {
  }
  register(){
    this.toastService.presentToast('[TODO]:User registered successfully.','success');
  }
}
