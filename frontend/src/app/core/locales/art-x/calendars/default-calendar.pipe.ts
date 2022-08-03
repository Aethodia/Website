import {Pipe, PipeTransform} from '@angular/core';

//  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //
import {Utils} from 'app/core/utils/utils';
export {DefaultCalendarPipe};

////////////////////////////////////////////////////////////////////////////////
@Pipe({name: 'defaultCalendar'})
class DefaultCalendarPipe implements PipeTransform {

    //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //
    //TODO: Support Aethodian calendar inputs
    //TODO: Support localized output (English or Aethodian)
    public transform(
        datetime: Date|string,
        lang?: string,
    ): string {

        // Calculate base fields
        const defaultCalendarRaw: number = Utils.getSecondsFromUnixEpoch(datetime) - Utils.getSecondsFromUnixEpoch('2010-04-22T12:00:00-04:00');
        const positive: boolean = defaultCalendarRaw >= 0;
        let unaccountedSeconds: number = Math.abs(defaultCalendarRaw);

        // Calculate seconds
        const secondsInDay:    number = ((24 * 60) + 11) * 60;
        const secondsInWeek:   number = 6 * secondsInDay;
        const secondsInMonth:  number = 6 * secondsInWeek;
        const secondsInYear:   number = 4 * secondsInMonth;
        const secondsInHour:   number =     secondsInDay / 12;
        const secondsInMinute: number =     secondsInHour / 144;

        // Break the seconds up into useful values
        const years:   number = Math.floor(unaccountedSeconds / secondsInYear);
            unaccountedSeconds  =            unaccountedSeconds % secondsInYear;
        const months:  number = Math.floor(unaccountedSeconds / secondsInMonth);
            unaccountedSeconds  =            unaccountedSeconds % secondsInMonth;
        const weeks:   number = Math.floor(unaccountedSeconds / secondsInWeek);
            unaccountedSeconds  =            unaccountedSeconds % secondsInWeek;
        const days:    number = Math.floor(unaccountedSeconds / secondsInDay);
            unaccountedSeconds  =            unaccountedSeconds % secondsInDay;
        const hours:   number = Math.floor(unaccountedSeconds / secondsInHour);
            unaccountedSeconds  =            unaccountedSeconds % secondsInHour;
        const minutes: number = Math.floor(unaccountedSeconds / secondsInMinute);
            unaccountedSeconds  =            unaccountedSeconds % secondsInMinute;
        console.debug(years, months, weeks, days, hours, minutes, unaccountedSeconds);

        // Stringify the fields
        let signString   = positive ? '' : '-';
        let yearString   = ( years     ).toString(12).padStart(3, '0');
        let monthString  = (months  + 1).toString(12).padStart(1, '0');
        let weekString   = ( weeks  + 1).toString(12).padStart(1, '0');
        let dayString    = (  days  + 1).toString(12).padStart(1, '0');
        let hourString   = ( hours     ).toString(12).padStart(1, '0');
        let minuteString = (minutes    ).toString(12).padStart(2, '0');
        let totalDayString = ((months * 36) + (weeks * days) + 1).toString(12).padStart(2, '0');

        // Return result
        return `${signString}${yearString}.${totalDayString}:${hourString}.${minuteString}`;
    }
}
