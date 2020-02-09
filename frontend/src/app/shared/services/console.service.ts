import {Injectable} from '@angular/core';
import {VariableService} from './variable.service';

////////////////////////////////////////////////////////////////////////////////
@Injectable()
/** Wraps the console object.  Primary purpose is to disable logging in prod. */
export class ConsoleService extends Console {

    //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //
    constructor(
        private readonly varSvc: VariableService
    ) {
        // Make `ConsoleService` identical to `console`.
        super();

        // If not dev mode, replace all the properties.
        if(!this.varSvc.getVar('isDevMode')) {
            for(const key in this) {
                if(this.hasOwnProperty(key)) {
                    switch(key) {
                        case 'warn':
                        case 'error':
                            break; //TODO: Wrap these functions to remove all parameters.
                        default:
                            this[key] = null; //TODO: Instead of null, set to an empty thing with a matching typeof.
                    }
                }
            }
        }

        // Done
        return this;
    }
}
