////////////////////////////////////////////////////////////////////////////////
/** Takes a character and figures out whether it's alphanumeric.
 * @param char The character to check
 * @returns `true` if `char` is alphanumeric.
 */
export default function checkAlphanumericity(char: string): boolean {
    return !!char.charAt(0).match(/[a-z\d]/i);
}
