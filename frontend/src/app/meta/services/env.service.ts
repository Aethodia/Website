import {Injectable, isDevMode} from '@angular/core';

//  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //
import {AsyncVar} from '../misc/async-var';
import {Keyring} from '../misc/keyring';

////////////////////////////////////////////////////////////////////////////////
@Injectable()
/** Asynchronously stores and distributes environment variables.
 *  A great way to share data across the app.
 * @alias envSvc
 */
class EnvService extends Keyring<AsyncVar<any>> {
    public readonly isDevMode = new AsyncVar<boolean>(isDevMode());
}

////////////////////////////////////////////////////////////////////////////////
export {EnvService};
