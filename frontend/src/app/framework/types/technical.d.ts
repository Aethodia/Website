//  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //
/** An object with all values being the same type.
 * @deprecated Not particularly type-safe — use stricter types wherever possible.
 */
declare class Table<Value> extends Object {
    [key: string]: Value|Function;
    [key: number]: Value|Function;
}
// type Table<Value> = Object & {
//     [key in string|number]: Value;
// };
