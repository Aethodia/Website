import {Injectable} from '@angular/core';

//  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //
import {AsyncVar} from '../../meta/misc/async-var';
import {Keyring} from '../../meta/misc/keyring';

////////////////////////////////////////////////////////////////////////////////
@Injectable()
/** Asynchronously stores and distributes variables.
 *  A great way to share data across the app.
 */
class ShariablesService extends Keyring<AsyncVar<any>> {
    // Variables go here
}

////////////////////////////////////////////////////////////////////////////////
export {ShariablesService};
