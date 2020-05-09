import {Injectable, isDevMode} from '@angular/core';
import {AsyncVar} from '../misc/async-var';
export {EnvironmentService};

////////////////////////////////////////////////////////////////////////////////
@Injectable()
/** Asynchronously stores and distributes environment variables.
 *  A great way to share data across the app.
 */
class EnvironmentService {

    //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //
    /** Asynchronous environment variables. */
    public readonly vars = class Vars extends Table<AsyncVar<unknown>> {}

    //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //
    /** Synchronous environment constants. */
    public readonly consts = class Consts extends Object {
        public static readonly isDevMode: boolean = isDevMode();
    }
}
