import {Injectable, isDevMode} from '@angular/core';
import {BehaviorSubject} from 'rxjs';

////////////////////////////////////////////////////////////////////////////////
@Injectable()
/** Asynchonously stores and distributes variables.
 *  A great way to share data across the app.
 */
class VariableService {
    private variables: {
        [key: string]: BehaviorSubject<any>,
        isDevMode: BehaviorSubject<boolean>,
    };

    //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //
    constructor() {
        this.variables = {
            isDevMode: new BehaviorSubject(isDevMode()),
        };
        return this;
    }

    //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //
    /** Gets an environment variable
     * @param  key The name of the variable you want to access.
     * @return the requested variable inside of a Subject.
     */
    public readonly getVar = <T>(key: string): BehaviorSubject<T> => {
        if(this.variables[key] === undefined) {
            throw new ReferenceError(`this.variables['${key}'] === undefined`);
        }
        return this.variables[key];
    }

    //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //
    /** Gets an environment variable
     * @param key   The name of the variable you want to modify.
     * @param value What you want to set the variable to.
     */
    public readonly setVar = <T>(key: string, value: T): void => {
        this.variables[key].next(value);
    }
}

////////////////////////////////////////////////////////////////////////////////
export {
    VariableService,
}
