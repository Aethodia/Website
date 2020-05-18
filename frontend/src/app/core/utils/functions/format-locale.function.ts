import CAPS from '../misc/caps.enum';
import changeCaps from './change-caps.function';

////////////////////////////////////////////////////////////////////////////////
/** Takes a locale and returns it with the specified format.
 * @param locale The locale string to format.
 * @param format The format to use.
 * @returns the formatted locale string.
 */
export default function formatLocale(
    locale: string,
    format: {
        separator: ''|' '|'_'|'-',
        capitalization: CAPS.SAME|CAPS.UPPER|CAPS.LOWER|CAPS.TITLE,
    } = {
        separator: '-',
        capitalization: CAPS.TITLE,
    },
): string|never {

    // Validate
    if(!locale.match(/(^[a-z\d]+([ -_][a-z\d]+)?$)/gim)) throw new Error('Invalid BCP47 locale string.');

    // Change the separator
    locale.replace(/[^a-z\d]/gi, format.separator);

    // Change case
    const segments: string[] = locale.split(format.separator); // Split the string at the separator
    let caps: [CAPS, CAPS];
    switch(format.capitalization) {
        case CAPS.UPPER:
            caps = [CAPS.UPPER, CAPS.UPPER];
            break;
        case CAPS.LOWER:
            caps = [CAPS.LOWER, CAPS.LOWER];
            break;
        case CAPS.TITLE:
            caps = [CAPS.LOWER, CAPS.UPPER];
            break;
        default:
            caps = [CAPS.SAME, CAPS.SAME];
    }

    // Re-assemble the string
    return (
        changeCaps(segments[0], caps[0]) +
        format.separator +
        changeCaps(segments[1], caps[1])
    );
}
