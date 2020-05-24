import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { CapacitorStorageService } from '../services/capacitor-storage.service';
import { AppConstants } from '../config/application-constant';

@Injectable({
  providedIn: 'root'
})
export class SecureGuard implements CanActivate {
  constructor(public storageService: CapacitorStorageService, public router: Router) { }
  canActivate(): Promise<boolean> {
    return new Promise(resolve => {
      this.storageService
        .get(AppConstants.USER)
        .then(res => {
          if (res) {
            resolve(true);
          } else {
            this.router.navigate(['login']);
            resolve(false);
          }
        })
        .catch(err => {
          resolve(false);
        });
    });

  }
}
