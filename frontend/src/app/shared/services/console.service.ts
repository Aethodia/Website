import {Injectable} from '@angular/core';
import {VariableService} from './variable.service';
import { UtilityCode } from '../misc/utility-code';

////////////////////////////////////////////////////////////////////////////////
@Injectable()
/** Wraps the console object.  Primary purpose is to disable logging in prod. */
class ConsoleService extends Console {

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
                            this[key] = UtilityCode.new(key);
                    }
                }
            }
        }

        // Done
        return this;
    }
}

////////////////////////////////////////////////////////////////////////////////
export {
    ConsoleService,
}
