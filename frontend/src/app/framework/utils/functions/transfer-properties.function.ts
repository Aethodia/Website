////////////////////////////////////////////////////////////////////////////////
/** Recursively copies all properties of one object to another, and returns the result.
 * @param to The object to save the properties to.
 * @param from The object to get the properties from.
 */
export default function transferProperties<
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
                to[key] = transferProperties(to[key] as any, from[key] as any); //NOTE: `any` should be type-safe here, given the checks we've done.
                break;
            default:
                to[key] = (from as any)[key]; //NOTE: `any` should be type-safe here, given the checks we've done.
        }
    }
    return to;
}
