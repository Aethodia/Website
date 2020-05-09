export {Utilities};

////////////////////////////////////////////////////////////////////////////////
/** Contains general reusable utility code. */
class Utilities {

    //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //
    /** Returns a brand new instance with the same type as the input.
     * @param variable The variable whose type to instantiate
     * @returns an instantation of the input's type.
     */
    public static new (variable: any): bigint|boolean|Function|number|object|string|symbol|undefined|never {
        const type = typeof(variable);
        switch(type) {
            case 'bigint':
                return BigInt(0);
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

        for(const key of Object.keys(from) as Array<keyof FromType>) { // `keyof` is safe here, because we're only going to assign like types to like types.
            switch(typeof(from[key])) {
                case 'object':
                    to[key] = Utilities.transferProperties(to[key] as any, from[key] as any); //NOTE: `any` should be type-safe here, given the checks we've done.
                    break;
                default:
                    to[key] = (from as ToType)[key];
            }
        }
        return to;
    }

    //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //
    /** A shorthand for when you need to use a `for...in` loop.
     * @param table The object whose keys to iterate over.
     * @param callback The function to execute for each iteration.
     */
    public static forEach<Type extends object>(table: Type, callback: (key: string|number) => void): void {
        for(const key of Object.keys(table)) {
            callback(key);
        }
    }
}
