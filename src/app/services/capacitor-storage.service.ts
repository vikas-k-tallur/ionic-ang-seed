import { Injectable } from '@angular/core';
import { Plugins } from '@capacitor/core';
const { Storage } = Plugins;
@Injectable({
  providedIn: 'root'
})
export class CapacitorStorageService {
  async set(storageKey: string, value: any): Promise<void> {
    const encryptedValue = btoa(escape(JSON.stringify(value)));
    await Storage.set({
      key: storageKey,
      value: encryptedValue
    });
  }

  // Get the value
  async get(storageKey: string): Promise<any> {
    const ret = await Storage.get({ key: storageKey });
    return JSON.parse(unescape(atob(ret.value)));
  }

  async remove(storageKey: string) : Promise<void>{
    await Storage.remove({ key: storageKey });
  }

  // Clear storage
  async clear(): Promise<void> {
    await Storage.clear();
  }
}

