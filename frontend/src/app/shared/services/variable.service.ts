import {Injectable, isDevMode} from '@angular/core';

////////////////////////////////////////////////////////////////////////////////
@Injectable()
/** Asynchonously stores and distributes variables.
 *  A great way to share data across the app.
 */
export class VariableService {
    private variables: AnyObj;

    //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //
    constructor() {
        this.variables = {
            isDevMode: isDevMode(),
        };
        return this;
    }

    //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //
    /** Gets an environment variable
     * @param  key The name of the variable you want to access.
     * @return the requested variable.
     */
    //TODO: Observablize
    public readonly getVar = (key: string): any => {
        return this.variables[key];
    }

    //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //
    /** Gets an environment variable
     * @param key The name of the variable you want to modify.
     * @param val What you want to set the variable to.
     */
    //TODO: Observablize
    public readonly setVar = (key: string, val: any): void => {
        this.variables[key] = val;
    }
}
