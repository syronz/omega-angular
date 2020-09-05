import { Injectable } from '@angular/core';
import { Terms } from './terms';

@Injectable({
  providedIn: 'root'
})
export class DictService {
  selectedLang = 'en';

  constructor() {
    const savedLang = localStorage.getItem('language');
    switch (savedLang) {
      case 'en':
        this.selectedLang = 'en';
        break;
      case 'ku':
        this.selectedLang = 'ku';
        break;
      case 'ar':
        this.selectedLang = 'ar';
        break;
      default:
        console.warn('there is no saved language');
        break;
    }
  }

  translate(str: string): string {
    return Terms[str] === undefined ? `* ${str} *` : Terms[str][this.selectedLang];
  }
}
