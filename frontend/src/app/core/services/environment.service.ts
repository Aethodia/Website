import {Injectable, isDevMode, Inject, LOCALE_ID} from '@angular/core';
import {getLocaleCurrencyCode} from '@angular/common';

//  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //
import {AsyncVar} from '../classes/async-var.class';
import {MetadataService} from './metadata.service';
import {Utils} from '../utils/utils';

//  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //
export {EnvironmentService};

////////////////////////////////////////////////////////////////////////////////
@Injectable()
/** Determine the environment in which the application is running.
 *  This generally means browser detection, among other things.
 */
class EnvironmentService {

    //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //
    /** Synchronous environment constants. */
    public readonly consts = class Consts {
        public static readonly isDevMode: boolean = isDevMode();
    }

    //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //
    /** Asynchronous environment variables. */
    public readonly vars = class Vars {
        [key: string]: nil|AsyncVar<unknown>;
        public static language: AsyncVar<string>;
        public static country:  AsyncVar<string>;
        public static currency: AsyncVar<string>;
    }

    //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //
    constructor(
        @Inject(LOCALE_ID) private readonly DEFAULT_LOCALE: string,
        meta: MetadataService,
    ) {
        this.vars.country  = new AsyncVar(this.detect.country());
        this.vars.currency = new AsyncVar(this.detect.currency());
        this.vars.language = newAsyncLanguageVar(meta, this.detect.language());

        return this;
    }

    ////////////////////////////////////////////////////////////////////////////////
    private readonly detect = {

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

        //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //
        language: (): string|null => {
            let language: string|null;

            //TODO
            language = this.DEFAULT_LOCALE;

            return language;
        },
    }
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
