export {textFlowEnum}
export type {TextFlowTuple}
export default getTextFlow;

////////////////////////////////////////////////////////////////////////////////
/** The directions in which a language's orthography can flow. */
enum textFlowEnum {
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
    textFlowEnum.ltr|textFlowEnum.rtl,
    textFlowEnum.ttb|textFlowEnum.btt,
    textFlowEnum.hor|textFlowEnum.ver,
]

////////////////////////////////////////////////////////////////////////////////
/** A shorthand for when you need to use a `for...in` loop.
 * @param lang A valid IETF language tag.
 * @returns the direction in which the language's orthography flows.
 */
function getTextFlow(lang: string): TextFlowTuple {

    // For country-specific orthographies
    switch(lang) {
        case 'art-x':
            return [textFlowEnum.ltr, textFlowEnum.btt, textFlowEnum.ver];
    }

    // For languages' default orthographies
    switch(lang.split('-')[0]) {
        case 'en':
        default:
            return [textFlowEnum.ltr, textFlowEnum.ttb, textFlowEnum.hor];
    }
}
