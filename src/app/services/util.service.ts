import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UtilService {

  constructor() { }

  public capitalize(word: string): string {
    return `${word.charAt(0).toUpperCase()}${word.substring(1)}`
  }
}
