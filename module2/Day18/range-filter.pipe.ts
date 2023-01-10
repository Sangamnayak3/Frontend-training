import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'rangeFilter'
})
export class RangeFilterPipe implements PipeTransform {

  transform(input: any[], min:number, max:number): any[]{
    let output: any[] = [];
    output = input.filter(item => item.Sal >=min && item.Sal <=max);
    return output;
  }

}
