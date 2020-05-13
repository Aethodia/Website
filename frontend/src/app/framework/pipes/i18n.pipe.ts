import {Pipe, PipeTransform} from '@angular/core';
export {I18nPipe};

////////////////////////////////////////////////////////////////////////////////
@Pipe({
    name: 'i18n',
})
/** Replaces translation keys with actual translations.  Supports parameters. */
class I18nPipe implements PipeTransform {

    //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //
    /** Replaces a translation key with an actual translation.  Supports parameters.
     * @param key The key for the translation.
     * @param params The variables used in the translation.
     * @returns a completed translation.
     */
    transform(key: string, params: string[] = []): string {
        return key; //TODO
    }
}
