import {AsyncPipe, DatePipe} from '@angular/common';
import {Pipe, PipeTransform} from '@angular/core';
import {map} from 'rxjs/operators';
import {ReferenceCalendarPipe, DefaultCalendarPipe, EarthlingCalendarPipe, MartianCalendarPipe } from '../locales/art-x/art-x-locale.module';

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
@Pipe({name: 'datetime'})
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
                    lang = lang ?? undefined;
                    switch(lang) {

                        case 'art':
                        case 'art-X':
                        case  'en-X':
                            switch(options?.calendar) {
                                case 'earthling':
                                    return (new EarthlingCalendarPipe).transform(datetime, lang);

                                case 'martian':
                                    return (new MartianCalendarPipe).transform(datetime, lang);

                                case undefined:
                                case null:
                                case 'default':
                                    return (new DefaultCalendarPipe).transform(datetime, lang);

                                case 'reference':
                                    return (new ReferenceCalendarPipe).transform(datetime, lang);

                                default:
                                    throw new TypeError(`'${options?.calendar}' is not a valid calendar!`);
                            }

                        default:
                            //TODO: Allow specifying a specific calendar ('gregorian', 'julian', etc).
                            return this.date.transform(
                                datetime,
                                options?.format,
                                options?.timezone,
                                lang,
                            ) ?? datetime.toLocaleString();
                    }
                },
            )),
        ) ?? datetime.toLocaleString();
    }
}
