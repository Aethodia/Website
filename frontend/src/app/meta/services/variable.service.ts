import {Injectable, isDevMode} from '@angular/core';
import {BehaviorSubject} from 'rxjs';

//  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //
import {AsyncVar} from '../misc/async-var';

////////////////////////////////////////////////////////////////////////////////
@Injectable()
/** Asynchronously stores and distributes variables.
 *  A great way to share data across the app.
 */
class AppVariableService {
    constructor() {return this;}

    //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //
    private variables: {
        [key: string]: AsyncVar<any>,
        isDevMode: AsyncVar<boolean>,
    } = {
        isDevMode: new AsyncVar(isDevMode()),
    };

    //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //
    /** Gets an environment variable
     * @param  key The name of the variable you want to access.
     * @return the requested variable inside of a Subject.
     */
    public readonly get = <T>(key: string): BehaviorSubject<T> => {
        if(this.variables[key] === undefined) {
            throw new ReferenceError(`this.variables['${key}'] === undefined`);
        }
        return this.variables[key].get();
    }

    //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //
    /** Gets an environment variable
     * @param key   The name of the variable you want to modify.
     * @param value What you want to set the variable to.
     */
    public readonly set = <T>(key: string, value: T): void => {
        this.variables[key].set(value);
    }
}

////////////////////////////////////////////////////////////////////////////////
export {AppVariableService};
