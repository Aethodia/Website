import {Injectable, isDevMode, Inject, LOCALE_ID} from '@angular/core';
import {getLocaleCurrencyCode} from '@angular/common';
import {Platform} from '@angular/cdk/platform';
import {DeviceDetectorService} from 'ngx-device-detector';

//  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //
import {AsyncVar} from '../classes/async-var.class';
import {MetadataService} from './metadata.service';
import {Utils} from '../utils/utils';

//  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //
export {
    EnvironmentService,
    rendererEnum,
    deviceEnum,
};

////////////////////////////////////////////////////////////////////////////////
@Injectable()
/** Determine the environment in which the application is running.
 *  This generally means browser detection, among other things.
 */
class EnvironmentService {
    public readonly isDevMode: boolean = isDevMode();

    public readonly device:   deviceEnum   = this.detectDevice();
    public readonly renderer: rendererEnum = this.detectRenderer();

    public readonly language: AsyncVar<string> = newAsyncLanguageVar(this.meta, this.detectLanguage());
    public readonly country:  AsyncVar<string> = new AsyncVar(this.detectCountry());
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
