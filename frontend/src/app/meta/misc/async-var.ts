import {BehaviorSubject} from 'rxjs';

////////////////////////////////////////////////////////////////////////////////
/** A variable that can be get and set asynchronously. */
class AsyncVar<T> {
    private value: BehaviorSubject<T|undefined>;

    //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //
    constructor(value?: T|undefined) {
        this.value = new BehaviorSubject<T|undefined>(value);
        return this;
    }

    //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //
    /** Gets the variable
     * @return the variable inside of a Subject.
     */
    public readonly get = (): BehaviorSubject<T|undefined> => {
        return this.value;
    }

    //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //
    /** Sets the variable
     * @param value What you want to set the variable to.
     */
    public readonly set = (value: T): void => {
        this.value.next(value);
    }
}

////////////////////////////////////////////////////////////////////////////////
export {AsyncVar};
