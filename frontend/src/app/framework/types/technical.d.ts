//  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //
/** All of the `null`ish types in one. */
declare type nil = null|undefined|void;

//  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //
/** An `object` with unknown members of a given or `any` type.
 * @warn Not type-safe — use stricter types wherever possible.
 */
declare type table<Value = any> = object & {
    [key in string|number]: Value;
};

//  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //
/** An `interface` with unknown members of a given or `any` type.
 * @warn Not type-safe — use stricter types wherever possible.
 * @note Use `table` instead, wherever possible.
 */
declare interface Table<Value = any> extends table<Value> {}
declare class Table<Value = any> implements Table<Value> {}
