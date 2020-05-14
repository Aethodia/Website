//  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //
/** An empty `class` that can be used as a type for all `class`es. */
declare interface Class {} //TODO: What use is this, really?

//  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //
/** All of the `null`ish types in one. */
declare type nil = null|undefined; // void|never

//  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //
/** All of the possible index types in one. */
declare type index = string|number|symbol;

//  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //
/** An `object` with unknown members of a given or `unknown` type. */
declare type table<Type = unknown> = object & {
    [key in index]?: Type|null;
};
