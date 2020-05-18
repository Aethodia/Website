import {Pipe, PipeTransform} from '@angular/core';
export {NumberPipe};

////////////////////////////////////////////////////////////////////////////////
@Pipe({
    name: 'number',
})
class NumberPipe implements PipeTransform {
    public transform(number: number, display: string = ''): string {
        return String(number); //TODO
    }
}
