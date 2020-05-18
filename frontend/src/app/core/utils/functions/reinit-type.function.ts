////////////////////////////////////////////////////////////////////////////////
/** Returns a brand new instance with the same type as the input.
 * @param variable The variable whose type to instantiate
 * @returns an instantation of the input's type.
 */
export default function reinitType(variable: unknown): bigint|boolean|Function|number|object|string|symbol|undefined|never {
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
