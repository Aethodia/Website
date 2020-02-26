import {Injectable} from '@angular/core';

//  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //
import {AsyncVar} from '../../meta/misc/async-var';
import {Keyring} from '../../meta/misc/keyring';

////////////////////////////////////////////////////////////////////////////////
@Injectable()
/** Asynchronously stores and distributes variables.
 *  A great way to share data across the app.
 * @alias varSvc
 */
class AppVariableService extends Keyring<AsyncVar<any>> {
    // Variables go here
}

////////////////////////////////////////////////////////////////////////////////
export {AppVariableService};
