import {BehaviorSubject} from 'rxjs';
export {AsyncVar};

////////////////////////////////////////////////////////////////////////////////
/** A variable that can be get and set asynchronously. */
class AsyncVar<Type> extends Object {
    protected readonly subject: BehaviorSubject<Type|null|undefined>;

    //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //
    constructor(
        value?: Type|null,
    ) {
        super();
        this.subject = new BehaviorSubject<Type|null|undefined>(value);
        return this;
    }

    //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //
    /** Gets the variable asynchronously.
     * @return the variable inside of a subscribable.
     */
    public get(): BehaviorSubject<Type|null|undefined> {
        return this.subject;
    }

    //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //
    /** Sets the variable and updates all of its subscribers.
     * @param value The variable's new value.
     */
    public set(value: Type|null): void {
        this.subject.next(value);
    }

    //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //
    /** Deletes the stored variable and updates all of its subscribers. */
    public delete(): void {
        this.subject.next(undefined);
        this.subject.complete();
    }
}
