import {Injectable} from '@angular/core';
import {VariableService} from './variable.service';
import {UtilityCode} from '../misc/utility-code';
import * as _ from 'lodash';

////////////////////////////////////////////////////////////////////////////////
@Injectable()
/** Manages the `console` object.  Primary purpose is to disable logging in prod. */
class ConsoleService {

    /** A backup of `console`. */
    private readonly console: Console;

    //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //
    constructor(
        private readonly varSvc: VariableService
    ) {
        // Back up the original console
        this.console = _.cloneDeep(console);

        // Figure out whether we're in dev mode
        this.varSvc.getVar('isDevMode').subscribe(
            (isDevMode: boolean): void => {

                // If dev mode, restore console
                if(isDevMode) {
                    console = _.cloneDeep(this.console);
                }

                // If not dev mode, gut console
                else {
                    for(const key in console) {
                        if(console.hasOwnProperty(key)) {
                            switch(key) {

                                // Remove parameters from functions we want to keep
                                case 'warn':
                                case 'error':
                                    console[key] = (message?: any, ...optionalParams: any[]): void => console[key]()
                                    break;

                                // Wipe functions we do not want to keep
                                default:
                                    console[key] = UtilityCode.new(console[key]);
                            }
                        }
                    }
                }
            }
        )

        // Done
        return this;
    }
}

////////////////////////////////////////////////////////////////////////////////
export {
    ConsoleService,
}
