////////////////////////////////////////////////////////////////////////////////
/** The directions in which a language's orthography can flow. */
export enum TextDirectionEnum {
    ltr = 'ltr',
    rtl = 'rtl',
    ttb = 'ttb',
    btt = 'btt',
    ver = 'ver',
    hor = 'hor'
}

////////////////////////////////////////////////////////////////////////////////
/** A complete description of how an orthography flows. */
export type TextDirectionTuple = [
    TextDirectionEnum.ltr|TextDirectionEnum.rtl,
    TextDirectionEnum.ttb|TextDirectionEnum.btt,
    TextDirectionEnum.hor|TextDirectionEnum.ver,
]

////////////////////////////////////////////////////////////////////////////////
/** A shorthand for when you need to use a `for...in` loop.
 * @param lang A valid IETF language tag.
 * @returns the direction in which the language's orthography flows.
 */
export default function getTextDirection(lang: string): TextDirectionTuple {

    // For country-specific orthographies
    switch(lang) {
        case 'art-zzz':
            return [TextDirectionEnum.ltr, TextDirectionEnum.btt, TextDirectionEnum.ver];
    }

    // For languages' default orthographies
    switch(lang.split('-')[0]) {
        case 'en':
        default:
            return [TextDirectionEnum.ltr, TextDirectionEnum.ttb, TextDirectionEnum.hor];
    }
}
