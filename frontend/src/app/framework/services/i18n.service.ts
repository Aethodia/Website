import {Injectable, Inject, LOCALE_ID} from '@angular/core';
import {getLocaleCurrencyCode} from '@angular/common';

//  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //
import {AsyncVar} from '../classes/async-var.class';
import {MetadataService} from './metadata.service';
import {Utils} from '../utils/utils';

//  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //
export {I18nService};

////////////////////////////////////////////////////////////////////////////////
@Injectable()
/** Initializes, stores, and shares the application's locale data. */
class I18nService {

    public readonly language: AsyncVar<string>;
    public readonly country:  AsyncVar<string>;
    public readonly currency: AsyncVar<string>;

    //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //
    constructor(
        @Inject(LOCALE_ID) private readonly DEFAULT_LOCALE: string,
        meta: MetadataService,
    ) {
        this.language = new AsyncLanguageVar(meta, this.detect.language());
        this.country  = new AsyncVar(this.detect.country());
        this.currency = new AsyncVar(this.detect.currency());

        return this;
    }

    ////////////////////////////////////////////////////////////////////////////////
    private readonly detect = {

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
            const language = this.language.get().value;
            country = language?.split('-')[1] || null;

            return country;
        },

        //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //
        currency: (): string|null => {
            let currency: string|null;

            //TODO
            const language = this.language.get().value;
            currency = getLocaleCurrencyCode(language ?? '');

            return currency;
        },
    }
}

////////////////////////////////////////////////////////////////////////////////
/** An `AsyncVar` designed to handle locales.
 *  Has a custom setter and a predetermined type.
 */
class AsyncLanguageVar extends AsyncVar<string> {

    //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //
    constructor(
        private readonly meta: MetadataService,
        value?: string|null
    ) {
        super(value);
        return this;
    }

    //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //
    public set(locale: string|null): void {
        if(locale !== null) locale = Utils.formatLocale(locale);
        this.subject.next(locale);
        this.meta.lang.set(locale ?? '');
    }
}
