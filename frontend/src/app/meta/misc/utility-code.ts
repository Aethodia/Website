////////////////////////////////////////////////////////////////////////////////
/** Contains general reusable utility code. */
class AppUtilities {

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
                throw new TypeError(`Unsupported type: '${type}'`);
        }
    }
}

////////////////////////////////////////////////////////////////////////////////
export {AppUtilities};
