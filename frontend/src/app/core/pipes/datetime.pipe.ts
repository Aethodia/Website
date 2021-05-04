import {AsyncPipe, DatePipe} from '@angular/common';
import {Pipe, PipeTransform} from '@angular/core';
import {map} from 'rxjs/operators';

//  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //
import {EnvironmentService} from '../services/environment.service';
export {DatetimePipe, DatetimePipeOptions};

////////////////////////////////////////////////////////////////////////////////
interface DatetimePipeOptions {
    format?: string,
    timezone?: string,
    calendar?: string,
}

////////////////////////////////////////////////////////////////////////////////
@Pipe({
    name: 'datetime',
})
class DatetimePipe implements PipeTransform {

    //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //
    constructor(
        private readonly environment: EnvironmentService,
        private readonly async: AsyncPipe,
        private readonly date: DatePipe,
    ) {
        return this;
    }

    //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //
    public transform(
        datetime: Date|string,
        options?: DatetimePipeOptions,
    ): string {
        return this.async.transform(
            this.environment.language.get().pipe(map(
                (lang: string|nil): string => {
                    switch(lang) {
                        case 'art':
                        case 'art-X':
                        case  'en-X':
                            return this.theodianTransform(datetime, options, lang);
                        default:
                            return this.normalTransform(datetime, options, lang ?? undefined);
                    }
                },
            )),
        ) ?? datetime.toLocaleString();
    }

    //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //
    private normalTransform(
        datetime: Date|string,
        options?: DatetimePipeOptions,
        lang?: string,
    ): string {
        //TODO: Allow specifying a specific calendar ('gregorian', 'julian', etc).
        return this.date.transform(
            datetime,
            options?.format,
            options?.timezone,
            lang,
        ) ?? datetime.toLocaleString();
    }

    //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //
    //TODO: Support Theodian calendar inputs
    //TODO: Support localized output (English or Theodian)
    //TODO: Move sub-functions into other files
    private theodianTransform(
        datetime: Date|string,
        options?: DatetimePipeOptions,
        lang?: string,
    ): string {

        switch(options?.calendar) {
            case 'earthling':
            case 'martian':
                throw new ReferenceError(`The '${options?.calendar}' calendar is unimplemented!`);

            case undefined:
            case null:
            case 'default':
                return this.transformToDefaultTheodianCalendar(datetime, options, lang);

            case 'reference':
                return this.transformToReferenceTheodianCalendar(datetime, options, lang);

            default:
                throw new TypeError(`'${options?.calendar}' is not a valid calendar!`);
        }
    }

    //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //
    //TODO: This belongs in Utils.
    private static readonly getSecondsFromUnixEpoch = (datetime: Date|string): number => {
        return Math.round((new Date(datetime)).getTime() / 1000); //TODO: Breaks down when timezones are brought into the picture!
    }

    //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //
    //TODO: This belongs in some locale definition file.
    private transformToReferenceTheodianCalendar(
        datetime: Date|string,
        options?: DatetimePipeOptions,
        lang?: string,
    ): string {
        return DatetimePipe.getSecondsFromUnixEpoch(datetime).toString(12);
    }

    //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //
    //TODO: This belongs in some locale definition file.
    private transformToDefaultTheodianCalendar(
        datetime: Date|string,
        options?: DatetimePipeOptions,
        lang?: string,
    ): string {

        // Calculate base fields
        const defaultCalendarRaw: number = DatetimePipe.getSecondsFromUnixEpoch(datetime) - DatetimePipe.getSecondsFromUnixEpoch('2010-04-22T12:00:00-04:00');
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

        // Part 3:  Return result
        return `${signString}${yearString}.${totalDayString}:${hourString}.${minuteString}`;
    }
}
