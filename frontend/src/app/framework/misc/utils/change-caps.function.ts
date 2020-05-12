import CAPS from './caps.enum';

////////////////////////////////////////////////////////////////////////////////
/** Changes the capitalization of a string.
 * @param string The string whose capitalization to change.
 * @param which How to capitalize.
 * @returns the capitalized string.
 */
export default function changeCaps(string: string, which: CAPS): string {

    const capitalize = (substring: string): string => {
        return changeCaps(substring, CAPS.UPPER)
    }

    switch(which) {

        case CAPS.UPPER:
            string = string.toLocaleUpperCase();
            break;

        case CAPS.LOWER:
            string = string.toLocaleLowerCase();
            break;

        case CAPS.SENTENCE:
            string = changeCaps(string, CAPS.LOWER);
            string = string.replace(/^\w{1}/gm, capitalize);
            break;

        case CAPS.TITLE:
            string = changeCaps(string, CAPS.SENTENCE);
            string = string.replace(/\s{1}\w{1}/g, capitalize);
            break;

        default:
    }
    return string;
}
