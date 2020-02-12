import {Injectable} from '@angular/core';
import {VariableService} from './variable.service';
import {UtilityCode} from '../misc/utility-code';

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

                        // Remove parameters from functions we want to keep
                        case 'warn':
                        case 'error':
                            //@ts-ignore (We're essentially setting these to themselves -- this should always be safe.)
                            this[key] = (message?: any, ...optionalParams: any[]): void => console[key]()
                            break;

                        // Wipe functions we do not want to keep
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
