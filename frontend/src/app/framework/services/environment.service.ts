import {Injectable, isDevMode} from '@angular/core';

//  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //
import {AsyncVar} from '../misc/async-var';

////////////////////////////////////////////////////////////////////////////////
@Injectable()
/** Asynchronously stores and distributes environment variables.
 *  A great way to share data across the app.
 */
class EnvironmentService extends Table<any> {

    //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //
    /** Asynchronous environment variables. */
    public readonly vars = class extends Table<AsyncVar<any>> {}

    //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //
    /** Synchronous environment constants. */
    public readonly consts = class extends Table<any> {
        public static readonly isDevMode: boolean = isDevMode();
    }
}

////////////////////////////////////////////////////////////////////////////////
export {EnvironmentService};
