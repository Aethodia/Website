import {Injectable, isDevMode, Inject, LOCALE_ID} from '@angular/core';
import {getLocaleCurrencyCode} from '@angular/common';
import {Platform} from '@angular/cdk/platform';

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

    public readonly isDevMode: boolean     = isDevMode();
    public readonly browser:   browserEnum = this.detectBrowser();

    public readonly language: AsyncVar<string> = newAsyncLanguageVar(this.meta, this.detectLanguage());
    public readonly country:  AsyncVar<string> = new AsyncVar(this.detectCountry());
    public readonly currency: AsyncVar<string> = new AsyncVar(this.detectCurrency());

    //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //
    constructor(
        @Inject(LOCALE_ID) private readonly DEFAULT_LOCALE: string,
        private readonly platform: Platform,
        private readonly meta: MetadataService,
    ) {
        return this;
    }

    //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //
    private detectBrowser(): browserEnum {
        if(this.platform.WEBKIT || this.platform.BLINK) return browserEnum.chromium;
        if(this.platform.FIREFOX) return browserEnum.mozilla;
        if(this.platform.TRIDENT) return browserEnum.dead;
        return browserEnum.other;
    }

    //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //
    private detectCountry(): string|null {
        let country: string|null;

        //TODO
        const language = this.language.get().value;
        country = language?.split('-')[1] || null;

        return country;
    }

    //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //
    private detectCurrency(): string|null {
        let currency: string|null;

        //TODO
        const language = this.language.get().value;
        currency = getLocaleCurrencyCode(language ?? '');

        return currency;
    }

    //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //
    private detectLanguage(): string|null {
        let language: string|null;

        //TODO
        language = this.DEFAULT_LOCALE;

        return language;
    }
}

////////////////////////////////////////////////////////////////////////////////
enum browserEnum {
    dead = -1,
    other = 0,
    chromium = 1,
    mozilla = 2,
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
