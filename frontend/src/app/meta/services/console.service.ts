import {Injectable} from '@angular/core';
import * as _ from 'lodash';

//  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //
import {AppUtilities} from '../misc/utility-code';
import {AppVariableService} from './variable.service';

////////////////////////////////////////////////////////////////////////////////
@Injectable()
/** Manages the `console` object.  Primary purpose is to disable logging in prod. */
class AppConsoleService {

    /** A backup of `console`. */
    private readonly console: Console;

    //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //
    constructor(
        private readonly varSvc: AppVariableService
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
                                    console[key] = AppUtilities.new(console[key]);
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
    AppConsoleService,
}
