import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  constructor(private authenticationService: AuthenticationService) { }

  ngOnInit() {
  }
  logout(){
    this.authenticationService.logout();
  }

}
