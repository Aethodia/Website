import {Injectable, isDevMode} from '@angular/core';

//  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //
import {AsyncVar} from '../misc/async-var';
import {HashMap} from '../misc/hash-map';

////////////////////////////////////////////////////////////////////////////////
@Injectable()
/** Asynchronously stores and distributes environment variables.
 *  A great way to share data across the app.
 */
class EnvironmentService extends HashMap<any> {

    //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //
    /** Asynchronous environment variables. */
    public readonly vars = class extends HashMap<AsyncVar<any>> {}

    //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //
    /** Synchronous environment constants. */
    public readonly consts = class extends HashMap<any> {
        public static readonly isDevMode: boolean = isDevMode();
    }
}

////////////////////////////////////////////////////////////////////////////////
export {EnvironmentService};
