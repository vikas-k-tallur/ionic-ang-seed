import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-slides',
  templateUrl: './slides.component.html',
  styleUrls: ['./slides.component.scss'],
})
export class SlidesComponent implements OnInit {
  public authenticatedUser: any;
  slideOpts = {
    speed: 400
  };
  constructor(private authenticationService:AuthenticationService) { }

  ngOnInit() { 
    this.authenticationService.userSession$.subscribe((res: any) => {
      this.authenticatedUser = res;
    });
  }
  
}
