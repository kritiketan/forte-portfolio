import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {
  localStorage: Storage;
  constructor() {
    this.localStorage = window.localStorage;
  }

  get(key: string): any {
    return JSON.parse(this.localStorage.getItem(key)|| '')
  }

  set(key: string, value: any): boolean {
    this.localStorage.setItem(key, JSON.stringify(value));
    return true;
  }

  remove(key: string): boolean {
    this.localStorage.removeItem(key);
    return true;
    
  }
}
