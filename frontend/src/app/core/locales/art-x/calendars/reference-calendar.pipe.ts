import {Pipe, PipeTransform} from '@angular/core';
import {Utils} from 'app/core/utils/utils';
export {ReferenceCalendarPipe};

////////////////////////////////////////////////////////////////////////////////
@Pipe({name: 'referenceCalendar'})
class ReferenceCalendarPipe implements PipeTransform {

    //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //
    //TODO: Support Theodian calendar inputs
    //TODO: Support localized output (English or Theodian)
    public transform(
        datetime: Date|string,
        lang?: string,
    ): string {
        return Utils.getSecondsFromUnixEpoch(datetime).toString(12);
    }
}
