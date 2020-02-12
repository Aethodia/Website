import {Injectable, isDevMode, EventEmitter} from '@angular/core';
import {ConsoleService} from './console.service';

////////////////////////////////////////////////////////////////////////////////
@Injectable()
/** Asynchonously stores and distributes variables.
 *  A great way to share data across the app.
 */
export class VariableService {
    private variables: {
        isDevMode: {
            value: boolean;
            emitter: EventEmitter<boolean>
        }
    };

    //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //
    constructor() {
        this.variables = {
            isDevMode: {
                value: isDevMode(),
                emitter: new EventEmitter(true),
            },
        };
        return this;
    }

    //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //
    /** Gets an environment variable
     * @param  key The name of the variable you want to access.
     * @return the requested variable.
     */
    public readonly getVar = (key: string): EventEmitter<any> => {
        if(this.variables[key] === undefined) {
            throw new TypeError(`this.variables['${key}'] === undefined`);
        }
        return this.variables[key].emitter;
    }

    //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //
    /** Gets an environment variable
     * @param key   The name of the variable you want to modify.
     * @param value What you want to set the variable to.
     */
    public readonly setVar = (key: string, value: any): void => {
        this.variables[key].value = value;
        this.variables[key].emitter.emit(this.variables[key].value);
    }
}
