//  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //
/** All of the `null`ish types in one. */
declare type nil = null|undefined|void;

//  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //
/** An empty `class` that can be used as a type for all `class`es. */
declare class Class {}

//  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //
/** An `object` with unknown members of a given or `any` type.
 * @warn Not type-safe — use stricter types wherever possible.
 */
declare type table<Value = unknown> = object & {
    [key in string|number]: Value;
};

//  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //
/** An `interface` with unknown members of a given or `any` type.
 * @warn Not type-safe — use stricter types wherever possible.
 * @note Use `table` instead, wherever possible.
 */
declare interface Table<Value = unknown> extends Object,           table<Value> {}
declare class     Table<Value = unknown> extends Object implements Table<Value> {}
