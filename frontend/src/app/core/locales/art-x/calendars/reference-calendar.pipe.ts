import {Pipe, PipeTransform} from '@angular/core';
import {Utils} from 'app/core/utils/utils';
export {ReferenceCalendarPipe};

////////////////////////////////////////////////////////////////////////////////
@Pipe({name: 'referenceCalendar'})
class ReferenceCalendarPipe implements PipeTransform {

    //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //
    //TODO: Support Aethodian calendar inputs
    //TODO: Support localized output (English or Aethodian)
    public transform(
        datetime: Date|string,
        lang?: string,
    ): string {
        return Utils.getSecondsFromUnixEpoch(datetime).toString(12);
    }
}
