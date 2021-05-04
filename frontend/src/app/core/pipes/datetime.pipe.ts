import {AsyncPipe, DatePipe} from '@angular/common';
import {Pipe, PipeTransform} from '@angular/core';
import {map} from 'rxjs/operators';

//  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //
import {EnvironmentService} from '../core.module';
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
                            return this.transformTheodian(datetime, options);
                        default:
                            return this.transformNormal(datetime, options, lang ?? undefined);
                    }
                },
            )),
        ) ?? this.transformNormal(datetime, options);
    }

    //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //
    private transformNormal(
        datetime: Date|string,
        options?: DatetimePipeOptions,
        lang?: string,
    ): string {
        return this.date.transform(
            datetime,
            options?.format,
            options?.timezone,
            lang,
        ) ?? String(datetime);
    }

    //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //
    private transformTheodian(
        datetime: Date|string,
        options?: DatetimePipeOptions,
    ): string {
        return String(datetime); //TODO
    }
}
