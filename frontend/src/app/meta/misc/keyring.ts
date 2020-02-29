////////////////////////////////////////////////////////////////////////////////
/** A class containing only variables of the same type. */
class Keyring<T> {
    [key: string]: T;
}

////////////////////////////////////////////////////////////////////////////////
export {Keyring};
