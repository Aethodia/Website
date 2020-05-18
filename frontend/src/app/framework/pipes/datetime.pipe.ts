import {Pipe, PipeTransform} from '@angular/core';
export {DatetimePipe};

////////////////////////////////////////////////////////////////////////////////
@Pipe({
    name: 'datetime',
})
class DatetimePipe implements PipeTransform {
    public transform(datetime: Date|string, format: string = ''): string {
        return String(datetime); //TODO
    }
}
