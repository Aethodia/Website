import capsEnum from '../misc/caps.enum';

////////////////////////////////////////////////////////////////////////////////
/** Changes the capitalization of a string.
 * @param string The string whose capitalization to change.
 * @param which How to capitalize.
 * @returns the capitalized string.
 */
export default function changeCaps(string: string, which: capsEnum): string {

    const capitalize = (substring: string): string => {
        return changeCaps(substring, capsEnum.upper)
    }

    switch(which) {

        case capsEnum.upper:
            string = string.toLocaleUpperCase();
            break;

        case capsEnum.lower:
            string = string.toLocaleLowerCase();
            break;

        case capsEnum.sentence:
            string = changeCaps(string, capsEnum.lower);
            string = string.replace(/^\w{1}/gm, capitalize);
            break;

        case capsEnum.title:
            string = changeCaps(string, capsEnum.sentence);
            string = string.replace(/\s{1}\w{1}/g, capitalize);
            break;

        default:
    }
    return string;
}
