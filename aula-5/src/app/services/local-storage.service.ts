import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  constructor() { }

  prefix = "ada-angular:::"

  get(key: string): string {
    return localStorage.getItem("ada-angular:::" + key) as string;
  }

  set(key: string, value: string) { 
    localStorage.setItem("ada-angular:::" + key, value)
  }

  remove(key: string) {
    // mandar pra uma API
    // mandar métricas

    localStorage.removeItem("ada-angular:::" + key)
  }
}