import {Injectable} from '@angular/core';
import {AsyncVar} from 'app/core/core.module';
export {ShariablesService};

////////////////////////////////////////////////////////////////////////////////
@Injectable()
/** Asynchronously stores and distributes variables.
 *  A great way to share data across the app.
 */
class ShariablesService {
    [key: string]: nil|AsyncVar<unknown>;

    //TODO; Variables go here
}
