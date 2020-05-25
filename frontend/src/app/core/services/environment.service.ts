import {Injectable, isDevMode, Inject, LOCALE_ID} from '@angular/core';
import {getLocaleCurrencyCode} from '@angular/common';

//  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //
import {AsyncVar} from '../classes/async-var.class';
import {MetadataService} from './metadata.service';
import {Utils} from '../utils/utils';

//  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //
export {
    EnvironmentService,
    browserEnum,
};

////////////////////////////////////////////////////////////////////////////////
@Injectable()
/** Determine the environment in which the application is running.
 *  This generally means browser detection, among other things.
 */
class EnvironmentService {

    //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //
    /** Environment variables. */
    public readonly vars: {
        isDevMode: boolean;
        browser:   browserEnum;

        language: AsyncVar<string>;
        country:  AsyncVar<string>;
        currency: AsyncVar<string>;
    };

    //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //
    constructor(
        @Inject(LOCALE_ID) private readonly DEFAULT_LOCALE: string,
        meta: MetadataService,
    ) {
        this.vars = {
            isDevMode: isDevMode(),
            browser:   this.detect.browser(),

            language: newAsyncLanguageVar(meta, this.detect.language()),
            country:  new AsyncVar(this.detect.country()),
            currency: new AsyncVar(this.detect.currency()),
        }
        return this;
    }

    ////////////////////////////////////////////////////////////////////////////////
    private readonly detect = {

        //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //
        browser: (): browserEnum => {
            return browserEnum.other; //TODO
        },

        //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //
        language: (): string|null => {
            let language: string|null;

            //TODO
            language = this.DEFAULT_LOCALE;

            return language;
        },

        //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //
        country: (): string|null => {
            let country: string|null;

            //TODO
            const language = this.vars.language.get().value;
            country = language?.split('-')[1] || null;

            return country;
        },

        //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //
        currency: (): string|null => {
            let currency: string|null;

            //TODO
            const language = this.vars.language.get().value;
            currency = getLocaleCurrencyCode(language ?? '');

            return currency;
        },
    }
}

////////////////////////////////////////////////////////////////////////////////
enum browserEnum {
    chrome,
    firefox,
    other,
}

////////////////////////////////////////////////////////////////////////////////
/**
 * @returns An `AsyncVar` designed to handle locales,
 *  with a custom setter and a predetermined type.
 */
function newAsyncLanguageVar(
    meta: MetadataService,
    value?: string|null,
) {
    return new (
        class AsyncLanguageVar extends AsyncVar<string> {
            public set(locale: string|null): void {
                if(locale !== null) locale = Utils.formatLocale(locale);
                this.subject.next(locale);
                meta.lang.set(locale ?? '');
            }
        }
    )(value);
}
