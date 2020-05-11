import {Injectable, OnInit} from '@angular/core';
import _ from 'lodash';

//  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //
import {Utilities} from '../misc/utilities';
import {EnvironmentService} from './environment.service';

//  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //
export {ConsoleService};

////////////////////////////////////////////////////////////////////////////////
@Injectable()
/** Manages the `console` object.  Primary purpose is to disable logging in prod. */
class ConsoleService implements OnInit {

    /** A backup of `console` that will work in production. */
    public readonly console: Console;

    //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //
    constructor(
        private readonly environment: EnvironmentService,
    ) {
        // Back up the original console
        this.console = _.cloneDeep(console);

        // Done
        return this;
    }

    //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //
    public ngOnInit(): void {

        // If not dev mode, gut the console
        if(!this.environment.consts.isDevMode) {
            this.sanitizeConsole();
        }
    }

    //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //
    /** Removes most of `console`'s functionality in order to prevent displaying
     *  potentially sensitive information to the user.
     */
    public sanitizeConsole(): void {
        for(const key of Reflect.ownKeys(console) as Array<keyof Console>) { // `keyof` is safe here, because we're only going to assign like types to like types.
            switch(key) {

                // Remove parameters from functions we want to keep
                case 'warn':
                case 'error':
                    const oldFn = console[key];
                    console[key] = (): void => oldFn(key);
                    break;

                // Wipe functions we do not want to keep
                default:
                    console[key] = Utilities.new(console[key]);
            }
        };
    }

    //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //
    /** Restores the default `console` from backup. */
    public restoreConsole(): void {
        console = _.cloneDeep(this.console);
    }
}
