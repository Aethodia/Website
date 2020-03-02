import {Injectable} from '@angular/core';
import {AsyncVar, HashMap} from 'app/framework/framework.module';

////////////////////////////////////////////////////////////////////////////////
@Injectable()
/** Asynchronously stores and distributes variables.
 *  A great way to share data across the app.
 */
class ShariablesService extends HashMap<AsyncVar<any>> {
    // Variables go here
}

////////////////////////////////////////////////////////////////////////////////
export {ShariablesService};
