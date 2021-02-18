import {Pipe, PipeTransform, Optional, Inject} from '@angular/core';
import {AsyncPipe} from '@angular/common';
import {map} from 'rxjs/operators';

//  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //
import {EnvironmentService} from '../services/environment.service';
import {I18N_BUNDLE} from '../consts/i18n.const';
import type {I18nBundle, I18nKey} from '../types/i18n.type';
export {I18nPipe};

////////////////////////////////////////////////////////////////////////////////
@Pipe({
    name: 'i18n',
})
/** Replaces translation keys with actual translations.  Supports parameters. */
class I18nPipe implements PipeTransform {

    //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //
    constructor(
        private readonly environment: EnvironmentService,
        private readonly async: AsyncPipe,

        @Inject(I18N_BUNDLE) private readonly bundle: I18nBundle,
    ) {
        return this;
    }

    //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //
    /** Replaces a translation key with an actual translation.  Supports parameters.
     *  Automatically updates when the language changes.
     * @param key The key for the translation.
     * @param params The variables used in the translation.
     * @returns a completed translation.
     */
    public transform(
        key: string,
        params: table<string, string> = {},
    ): string {
        return this.async.transform(
            this.environment.language.get().pipe(map(
                (lang: string|nil): string => {
                    if(lang == null) return key;
                    let string: string;
                    string = this.lookup(key, lang);
                    string = this.parse(string, params);
                    return string;
                },
            )),
        ) ?? key;
    }

    //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //
    /** Looks up the translation associated with a key and locale.
     * @param key The key for the translation.
     * @param lang The language to translate to.  Must be in the format of `xx` or `xx-XX`.
     * @returns the translation for the given key, or the key itself if no translation is found.
     */
    private lookup(
        key: string,
        lang: string,
    ): string {

        // Validate key
        if(this.bundle[key] === undefined) return key;
        const i18nKey = this.bundle[key] as I18nKey;

        // Look up long-form locale
        if(i18nKey[lang] !== undefined) return i18nKey[lang] as string;

        // Look up short-form locale
        lang = lang.split('-')[0];
        if(i18nKey[lang] !== undefined) return i18nKey[lang] as string;

        // If all else fails, just return the key.
        console.warn(`No \`${lang}\` localization for \`${key}\`.`);
        return key;
    }

    //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //
    /** Replaces placeholders with parameters.
     * @param string The string whose placeholders to replace.
     * @param params The variables that will replace the placeholders.
     * @returns the input string, parsed.
     */
    private parse(
        string: string,
        params: table<string, string>,
    ): string {

        for(const key of Object.keys(params)) {
            const regex: RegExp = new RegExp(`$[${key}]`, 'gm');
            if(params[key] != undefined) string = string.replace(regex, String(params[key]))
        }
        return string;
    }
}
