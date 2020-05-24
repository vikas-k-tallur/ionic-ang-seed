import { Injectable } from '@angular/core';
import { AuthenticationService } from '../services/authentication.service';

@Injectable({
  providedIn: 'root'
})
export class UserDataResolver {
  constructor(private authenticationService: AuthenticationService) {}

  resolve() {
    return this.authenticationService.getUserData();
  }
}