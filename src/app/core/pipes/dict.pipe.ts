import { Pipe, PipeTransform } from '@angular/core';
import { DictService } from '../services/dict/dict.service';

@Pipe({
  name: 'dict'
})
export class DictPipe implements PipeTransform {

  constructor(
    private dictService: DictService,
  ) {}

  transform(value: string, ...args: any[]): string {
    return this.dictService.translate(value);
  }

}
