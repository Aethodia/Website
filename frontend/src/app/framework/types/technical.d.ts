//  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //
/** An empty `class` that can be used as a type for all `class`es. */
declare class Class {} //TODO: What use is this, really?

//  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //
/** All of the `null`ish types in one. */
declare type nil = null|undefined; // void|never

//  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //
/** All of the possible index types in one. */
declare type index = string|number|symbol;

//  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //
/** An `object` with unknown members of a given or `unknown` type. */
declare type table<Type = unknown> = object & {
    [key in index]: Type|nil;
};

//  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //
/** An `Object` with unknown members of a given or `unknown` type.
 * @note Use `table` instead, wherever possible.
 */
declare interface Table<Type = unknown> extends Object,           table<Type> {}
declare class     Table<Type = unknown> extends Object implements Table<Type> {}
