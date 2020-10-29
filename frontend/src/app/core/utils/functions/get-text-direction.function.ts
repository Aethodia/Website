////////////////////////////////////////////////////////////////////////////////
/** The directions in which a language's orthography can flow. */
export enum TextDirectionType {
    ltr = 'ltr',
    rtl = 'rtl',
    ttb = 'ttb',
    btt = 'btt',
}

////////////////////////////////////////////////////////////////////////////////
/** A shorthand for when you need to use a `for...in` loop.
 * @param lang A valid IETF language tag.
 * @returns the direction in which the language's orthography flows.
 */
export default function getTextDirection(lang: string): TextDirectionType {

    // For country-specific orthographies
    switch(lang) {}

    // For languages' default orthographies
    switch(lang.split('-')[0]) {
        case 'art':
            return TextDirectionType.btt;
        case 'en':
        default:
            return TextDirectionType.ltr;
    }
}
