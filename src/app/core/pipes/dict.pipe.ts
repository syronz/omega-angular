import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { DictService } from '../services/dict/dict.service';

@Pipe({
  name: 'dict'
})
export class DictPipe implements PipeTransform {

  constructor(
    private dictService: DictService,
    private sanitizer: DomSanitizer,
  ) {}

  transform(value: string, ...args: any[]): SafeHtml {
    if (value !== null) {
      const translated = this.dictService.translate(value);
      if (args[0] === 'block') {
      let result = '';
      result = `<span style="direction:rtl; display:inline-block; width: 100%;"> ${translated} </span>`;
      return this.sanitizer.bypassSecurityTrustHtml(result);
      } else {
        return translated;

      }
    }
    // return this.dictService.translate(value);
    return value;
  }

}
