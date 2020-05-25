import capsEnum from '../misc/caps.enum';
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
        capitalization: capsEnum.same|capsEnum.upper|capsEnum.lower|capsEnum.title,
    } = {
        separator: '-',
        capitalization: capsEnum.title,
    },
): string|never {

    // Validate
    if(!locale.match(/(^[a-z\d]+([ -_][a-z\d]+)?$)/gim)) throw new Error('Invalid BCP47 locale string.');

    // Change the separator
    locale.replace(/[^a-z\d]/gi, format.separator);

    // Change case
    const segments: string[] = locale.split(format.separator); // Split the string at the separator
    let caps: [capsEnum, capsEnum];
    switch(format.capitalization) {
        case capsEnum.upper:
            caps = [capsEnum.upper, capsEnum.upper];
            break;
        case capsEnum.lower:
            caps = [capsEnum.lower, capsEnum.lower];
            break;
        case capsEnum.title:
            caps = [capsEnum.lower, capsEnum.upper];
            break;
        default:
            caps = [capsEnum.same, capsEnum.same];
    }

    // Re-assemble the string
    return (
        changeCaps(segments[0], caps[0]) +
        format.separator +
        changeCaps(segments[1], caps[1])
    );
}
