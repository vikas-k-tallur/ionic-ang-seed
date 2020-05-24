import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { AppConstants } from '../config/application-constant';
import { CapacitorStorageService } from './capacitor-storage.service';
import { HttpService } from './http.service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  userSession$ = new BehaviorSubject<any>([]);
  constructor(private httpService: HttpService,
    private storageService: CapacitorStorageService,
    private router: Router) { }

  getUserData() {
    this.storageService.get(AppConstants.USER).then(res => {
      this.userSession$.next(res);
    });
  }

  login(loginFormData: any): Observable<any> {
    return this.httpService.post('login', loginFormData);
  }
  
  logout() {
    this.storageService.clear();
    this.userSession$.next('');
    this.router.navigate(['']);
  }
}
