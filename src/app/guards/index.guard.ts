import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { CapacitorStorageService } from '../services/capacitor-storage.service';
import { AppConstants } from '../config/application-constant';

@Injectable({
  providedIn: 'root'
})
export class IndexGuard implements CanActivate {
  constructor(public storageService: CapacitorStorageService, public router: Router){}
  canActivate(): Promise<boolean> {
    return new Promise(resolve => {
      this.storageService
        .get(AppConstants.USER)
        .then(res => {
          if (res) {
            this.router.navigate(['secure']);
            resolve(false);
          } else resolve(true);
        })
        .catch(err => {
          resolve(true);
        });
    });
  }
  
}
