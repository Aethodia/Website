import {Injectable} from '@angular/core';
import {AsyncVar} from 'app/framework/framework.module';
export {ShariablesService};

////////////////////////////////////////////////////////////////////////////////
@Injectable()
/** Asynchronously stores and distributes variables.
 *  A great way to share data across the app.
 */
class ShariablesService extends Table<AsyncVar<any>> {
    // Variables go here
}
