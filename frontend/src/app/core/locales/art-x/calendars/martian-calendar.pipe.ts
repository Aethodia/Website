import {Pipe, PipeTransform} from '@angular/core';
export {MartianCalendarPipe};

////////////////////////////////////////////////////////////////////////////////
@Pipe({name: 'martianCalendar'})
class MartianCalendarPipe implements PipeTransform {

    //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //
    //TODO: Support Theodian calendar inputs
    //TODO: Support localized output (English or Theodian)
    public transform(
        datetime: Date|string,
        lang?: string,
    ): string {
        return datetime.toLocaleString(); //TODO: Implement.
    }
}
