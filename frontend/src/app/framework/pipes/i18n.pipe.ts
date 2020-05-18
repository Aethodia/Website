import {Pipe, PipeTransform, Optional, Inject} from '@angular/core';
import {AsyncPipe} from '@angular/common';
import {map} from 'rxjs/operators';

//  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //
import {I18nService} from '../services/i18n.service';
import {I18N_BUNDLE} from '../consts/i18n.const';
export {I18nPipe};

////////////////////////////////////////////////////////////////////////////////
@Pipe({
    name: 'i18n',
})
/** Replaces translation keys with actual translations.  Supports parameters. */
class I18nPipe implements PipeTransform {

    //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //
    constructor(
        private readonly i18nSvc: I18nService,
        private readonly async:   AsyncPipe,

        @Optional() @Inject(I18N_BUNDLE) private readonly bundle?: I18nBundle,
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
            this.i18nSvc.language.get().pipe(map(
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
     * @param lang The language to translate to.
     * @returns the translation for the given key.
     */
    private lookup(
        key: string,
        lang: string,
    ): string {
        return key; //TODO
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
