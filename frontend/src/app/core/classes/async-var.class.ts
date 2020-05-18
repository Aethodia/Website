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

        //NOTE: While we *could* just pass `value` to BehaviourSubject's constructor, we need to send it through `this.set` so that child classes with custom setters will work as expected.
        this.subject = new BehaviorSubject<Type|null|undefined>(undefined);
        if(value !== undefined) this.set(value);

        // Done
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
    /** Cancels all subscriptions and deletes the stored variable. */
    //TODO: Test.
    public delete(): void {
        this.subject.complete();
        this.subject.next(undefined);
    }
}
