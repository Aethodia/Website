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
                        case 'en-X':
                            return this.theodianTransform(datetime, options, lang);
                        default:
                            return this.normalTransform(datetime, options, lang ?? undefined);
                    }
                },
            )),
        ) ?? String(datetime);
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
        ) ?? String(datetime);
    }

    //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //
    //TODO: Support Theodian calendar inputs
    //TODO: Support localized output (English or Theodian)
    //TODO: Dozenalize output
    private theodianTransform(
        datetime: Date|string,
        options?: DatetimePipeOptions,
        lang?: string,
    ): string {
        switch(options?.calendar) {
            case 'earthling':
            case 'martian':
            case 'default':
                throw new ReferenceError(`The '${options?.calendar}' calendar is unimplemented!`);

            case undefined:
            case null:
            case 'reference':
                return String(Math.round((new Date(datetime)).getTime() / 1000)); //TODO: Breaks down when timezones are brought into the picture!

            default:
                throw new TypeError(`'${options?.calendar}' is not a valid calendar!`);
        }
    }
}
