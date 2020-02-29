import {Injectable, isDevMode} from '@angular/core';

//  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //
import {AsyncVar} from '../misc/async-var';
import {Keyring} from '../misc/keyring';

////////////////////////////////////////////////////////////////////////////////
@Injectable()
/** Asynchronously stores and distributes environment variables.
 *  A great way to share data across the app.
 */
class EnvironmentService extends Keyring<any> {

    //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //
    /** Asynchronous environment variables. */
    public readonly vars = class extends Keyring<AsyncVar<any>> {}

    //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //
    /** Synchronous environment constants. */
    public readonly consts = class extends Keyring<any> {
        public static readonly isDevMode: boolean = isDevMode();
    }
}

////////////////////////////////////////////////////////////////////////////////
export {EnvironmentService};
