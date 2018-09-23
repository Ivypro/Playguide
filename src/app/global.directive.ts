import { Directive, ElementRef, HostListener, Input } from '@angular/core';
import { Pipe, PipeTransform } from '@angular/core';

@Directive({
  selector: '[appClose]'
})
export class GlobalDirective {

  constructor(el: ElementRef) {  }


}



@Pipe({ name: 'dateSuffix' })
export class DateSuffix implements PipeTransform {
    transform(value: string): string {

    let suffix = 'th',
        day = value;

        if (day === '01'||day === '1' || day === '21' || day === '31') {
            suffix = 'st';
        } else if (day === '02' || day === '2' || day === '22') {
            suffix = 'nd';
        } else if (day === '03' || day === '3' || day === '23' ) {
           suffix = 'rd';
        }

        return suffix;

    }
}
