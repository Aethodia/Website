import {Injectable} from '@angular/core';
import * as _ from 'lodash';

//  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //
import {Utilities} from '../misc/utilities';
import {EnvironmentService} from './environment.service';

//  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //
export {ConsoleService};

////////////////////////////////////////////////////////////////////////////////
@Injectable()
/** Manages the `console` object.  Primary purpose is to disable logging in prod. */
class ConsoleService {

    /** A backup of `console`. */
    private readonly console: Console;

    //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //
    constructor(
        private readonly environment: EnvironmentService,
    ) {
        // Back up the original console
        this.console = _.cloneDeep(console);

        // If dev mode, restore console
        if(this.environment.consts.isDevMode) {
            console = _.cloneDeep(this.console);
            return;
        }

        // If not dev mode, gut console
        for(const key of Object.keys(console) as Array<keyof Console>) { // `keyof` is safe here, because we're only going to assign like types to like types.
            switch(key) {

                // // Remove parameters from functions we want to keep
                // case 'warn':
                // case 'error':
                //     console[key] = (): void => console[key](key);
                //     break;

                // Wipe functions we do not want to keep
                default:
                    console[key] = Utilities.new(console[key]);
            }
        };

        // Done
        return this;
    }
}
