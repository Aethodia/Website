////////////////////////////////////////////////////////////////////////////////
/** A shorthand for when you need to use a `for...in` loop.
 * @param table The object whose keys to iterate over.
 * @param callback The function to execute for each iteration.
 */
export default function forEach<Type extends object>(table: Type, callback: (key: index) => void): void {
    for(const key of Reflect.ownKeys(table)) {
        callback(key);
    }
}
