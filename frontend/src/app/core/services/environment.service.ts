import {Injectable, isDevMode} from '@angular/core';
import {AsyncVar} from '../classes/async-var.class';
export {EnvironmentService};

////////////////////////////////////////////////////////////////////////////////
@Injectable()
/** Asynchronously stores and distributes environment variables.
 *  A great way to share data across the app.
 */
class EnvironmentService extends Object {

    //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //
    /** Asynchronous environment variables. */
    public readonly vars = class Vars {
        [key: string]: nil|AsyncVar<unknown>;
        public static readonly foo = new AsyncVar<null>();
    }

    //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //
    /** Synchronous environment constants. */
    public readonly consts = class Consts {
        public static readonly isDevMode: boolean = isDevMode();
    }
}
