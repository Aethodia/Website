export type {TextFlowEnum, TextFlowTuple}
export default getTextFlow;

////////////////////////////////////////////////////////////////////////////////
/** The directions in which a language's orthography can flow. */
enum TextFlowEnum {
    ltr = 'ltr',
    rtl = 'rtl',
    ttb = 'ttb',
    btt = 'btt',
    ver = 'ver',
    hor = 'hor'
}

////////////////////////////////////////////////////////////////////////////////
/** A complete description of how an orthography flows. */
type TextFlowTuple = [
    TextFlowEnum.ltr|TextFlowEnum.rtl,
    TextFlowEnum.ttb|TextFlowEnum.btt,
    TextFlowEnum.hor|TextFlowEnum.ver,
]

////////////////////////////////////////////////////////////////////////////////
/** A shorthand for when you need to use a `for...in` loop.
 * @param lang A valid IETF language tag.
 * @returns the direction in which the language's orthography flows.
 */
function getTextFlow(lang: string): TextFlowTuple {

    // For country-specific orthographies
    switch(lang) {
        case 'art-zzz':
            return [TextFlowEnum.ltr, TextFlowEnum.btt, TextFlowEnum.ver];
    }

    // For languages' default orthographies
    switch(lang.split('-')[0]) {
        case 'en':
        default:
            return [TextFlowEnum.ltr, TextFlowEnum.ttb, TextFlowEnum.hor];
    }
}
