////////////////////////////////////////////////////////////////////////////////
/** Contains general reusable utility code. */
class Utilities {

    //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //
    /** Returns a brand new instance with the same type as the input.
     * @param variable The variable whose type to instantiate
     * @returns an instantation of the input's type.
     */
    public static readonly new = (variable: any): bigint|boolean|Function|number|object|string|symbol|undefined => {
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
     * @param from The object to get the properties from.
     * @param to The object to save the properties of `from` to.
     */
    public static readonly transferProperties = <T>(from: Table<any>, to: T|any): T => { //TODO: We shouldn't need to use `any` in `T|any`.
        for(const key of Object.keys(from)) {
            if(to[key] != null) {
                if(typeof(from[key]) !== 'object') {
                    to[key] = from[key];
                } else {
                    to[key] = Utilities.transferProperties<Object>(from[key], to[key]);
                }
            }
        }
        return to;
    }

    //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //
    /** A shorthand for when you need to use a `for...in` loop.
     * @param table The object whose keys to iterate over.
     * @param callback The function to execute for each iteration.
     */
    public static readonly forEach = (table: Table<any>, callback: (key: string|number) => void): void => {
        for(const key in table) {
            if(table.hasOwnProperty(key)) {
                callback(key);
            }
        }
    }
}

////////////////////////////////////////////////////////////////////////////////
export {Utilities};
