export {Utilities};

////////////////////////////////////////////////////////////////////////////////
enum CAPS {
    'SAME',
    'UPPER',
    'LOWER',
    'SENTENCE',
    'TITLE',
}

////////////////////////////////////////////////////////////////////////////////
/** Contains general reusable utility code. */
class Utilities {

    //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //
    /** Returns a brand new instance with the same type as the input.
     * @param variable The variable whose type to instantiate
     * @returns an instantation of the input's type.
     */
    public static new(variable: unknown): bigint|boolean|Function|number|object|string|symbol|undefined|never {
        const type = typeof(variable);
        switch(type) {
            case 'bigint':
                return BigInt(0); //TODO: Update the syntax to `0n`.
            case 'boolean':
                return false;
            case 'function':
                return (): void => {};
            case 'number':
                return 0;
            case 'object':
                return {};
            case 'string':
                return '';
            case 'symbol':
                return Symbol();
            case 'undefined':
                return undefined;
            default:
                throw new ReferenceError(`Unsupported type: '${type}'`);
        }
    }

    //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //
    /** Recursively copies all properties of one object to another, and returns the result.
     * @param to The object to save the properties to.
     * @param from The object to get the properties from.
     */
    public static transferProperties<
        ToType   extends FromType,
        FromType extends object = object,
    >(
        to:   ToType,
        from: FromType,
    ): ToType {

        for(const key of Reflect.ownKeys(from) as Array<keyof FromType>) { // `keyof` is safe here, because we're only going to assign like types to like types.
            if(typeof(to[key]) !== typeof(from[key])) continue;

            switch(typeof(from[key])) {
                case 'object':
                    to[key] = Utilities.transferProperties(to[key] as any, from[key] as any); //NOTE: `any` should be type-safe here, given the checks we've done.
                    break;
                default:
                    to[key] = (from as any)[key]; //NOTE: `any` should be type-safe here, given the checks we've done.
            }
        }
        return to;
    }

    //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //
    /** A shorthand for when you need to use a `for...in` loop.
     * @param table The object whose keys to iterate over.
     * @param callback The function to execute for each iteration.
     */
    public static forEach<Type extends object>(table: Type, callback: (key: index) => void): void {
        for(const key of Reflect.ownKeys(table)) {
            callback(key);
        }
    }

    //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //
    /** Changes the capitalization of a string.
     * @param string The string whose capitalization to change.
     * @param which How to capitalize.
     * @returns the capitalized string.
     */
    public static changeCaps(string: string, which: CAPS): string {

        const capitalize = (substring: string): string => {
            return Utilities.changeCaps(substring, CAPS.UPPER)
        }

        switch(which) {

            case CAPS.UPPER:
                string = string.toLocaleUpperCase();
                break;

            case CAPS.LOWER:
                string = string.toLocaleLowerCase();
                break;

            case CAPS.SENTENCE:
                string = Utilities.changeCaps(string, CAPS.LOWER);
                string = string.replace(/^\w{1}/gm, capitalize);
                break;

            case CAPS.TITLE:
                string = Utilities.changeCaps(string, CAPS.SENTENCE);
                string = string.replace(/\s{1}\w{1}/g, capitalize);
                break;

            default:
        }
        return string;
    }

    //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //
    /** Takes a character and figures out whether it's alphanumeric.
     * @param char The character to check
     * @returns `true` if `char` is alphanumeric.
     */
    public static checkAlphanumericity(char: string) {
        return char.charAt(0).match(/[a-z\d]/i);
    }

    //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //
    /** Takes a locale and returns it with the specified format.
     * @param locale The locale string to format.
     * @param format The format to use.
     * @returns the formatted locale string.
     */
    public static formatLocale(
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
            Utilities.changeCaps(segments[0], caps[0]) +
            format.separator +
            Utilities.changeCaps(segments[1], caps[1])
        );
    }
}
