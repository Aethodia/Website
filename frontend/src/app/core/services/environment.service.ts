import {Injectable, isDevMode, Inject, LOCALE_ID} from '@angular/core';
import {getLocaleCurrencyCode} from '@angular/common';
import {Platform} from '@angular/cdk/platform';
import {DeviceDetectorService} from 'ngx-device-detector';

//  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //
import {AsyncVar} from '../classes/async-var.class';
import {MetadataService} from './metadata.service';
import {supported} from 'config/vars/supported.const';
import {Utils} from '../utils/utils';

//  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //
export {
    EnvironmentService,
    rendererEnum,
    deviceEnum,
};

////////////////////////////////////////////////////////////////////////////////
enum deviceEnum {
    unknown = -1,
    desktop = 0,
    tablet = 1,
    mobile = 2,
}
enum rendererEnum {
    other = -1,
    chromium = 0,
    mozilla = 1,
    microsoft = 2,
}

////////////////////////////////////////////////////////////////////////////////
@Injectable()
/** Determine the environment in which the application is running.
 *  This generally means browser detection, among other things.
 */
class EnvironmentService {

    /** Whether we are in dev mode. */
    public readonly isDevMode: boolean = isDevMode();

    /** The type of device the client is using. */
    public readonly device:   deviceEnum   = this.detectDevice();
    /** The rendering engine that the client is using. */
    public readonly renderer: rendererEnum = this.detectRenderer();

    /** The user's language. */
    public readonly language: AsyncVar<string> = newAsyncLanguageVar(this.meta, this.detectLanguage());
    /** The user's country. */
    public readonly country:  AsyncVar<string> = new AsyncVar(this.detectCountry());
    /** The user's currency. */
    public readonly currency: AsyncVar<string> = new AsyncVar(this.detectCurrency());

    //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //
    constructor(
        @Inject(LOCALE_ID) private readonly DEFAULT_LOCALE: string,
        private readonly detector: DeviceDetectorService,
        private readonly meta: MetadataService,
        private readonly platform: Platform,
    ) {
        return this;
    }

    //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //
    private detectDevice(): deviceEnum {
        if(this.detector.isDesktop()) return deviceEnum.desktop;
        if(this.detector.isTablet())  return deviceEnum.tablet;
        if(this.detector.isMobile())  return deviceEnum.mobile;
        return deviceEnum.unknown;
    }

    //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //
    private detectRenderer(): rendererEnum {
        if(this.platform.WEBKIT || this.platform.BLINK) return rendererEnum.chromium;
        if(this.platform.FIREFOX) return rendererEnum.mozilla;
        if(this.platform.TRIDENT) return rendererEnum.microsoft;
        return rendererEnum.other;
    }

    //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //
    /** Detect the user's preferred language and attempt to match it up with our supported languages. */
    private detectLanguage(): string|null {
        for(const userLocale of navigator.languages) {
            for(const supportedLocale of supported.locales) {
                if(userLocale.split('-')[0] === supportedLocale.split('-')[0]) {
                    /* Returning `userLocale` instead of `supportedLocale` preserves the original country,
                     * and is safe because `I18nPipe` is able to handle any country suffix appropriately.
                     *
                     * Note that this means that the page will more-or-less *claim* to be in a national locale *even if it isn't*.
                     * For example, if the `userLocle` is 'en-GB', then we'll say we're displaying in 'en-GB', even if we only have translations for 'en-US'.
                     * TODO: Write something that doesn't have this caveat.
                     *
                     * However, since this is a greedy search, returning `supportedLocale` instead can actually get us a non-ideal locale, in terms of country:
                     * if we support both 'en-US' and 'en-GB' and the user requests 'en-GB', we would (incorrectly) give them 'en-US' if 'en-US' occurs before 'en-GB' in the `supportedLocales` array.
                     */
                    return userLocale;
                }
            }
        }
        return this.DEFAULT_LOCALE;
    }

    //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //
    private detectCountry(): string|null {
        let country: string|null;

        //TODO: This is a lousy way to detect country.
        const language = this.language.get().value;
        country = language?.split('-')[1] || null;

        return country;
    }

    //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //
    private detectCurrency(): string|null {
        let currency: string|null;

        //TODO: This is not a good way to detect currency.
        const language = this.language.get().value;
        currency = getLocaleCurrencyCode(language ?? '');

        return currency;
    }
}

////////////////////////////////////////////////////////////////////////////////
/** @returns An `AsyncVar` designed to handle locales, with a custom setter and a predetermined type. */
const newAsyncLanguageVar = (
    meta: MetadataService,
    value?: string|null,
) => new (
    class AsyncLanguageVar extends AsyncVar<string> {
        public set(locale: string|null): void {
            if(locale !== null) locale = Utils.formatLocale(locale);
            this.subject.next(locale);
            meta.lang.set(locale ?? '');
        }
    }
)(value);
