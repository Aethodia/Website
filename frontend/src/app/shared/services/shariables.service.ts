import {Injectable} from '@angular/core';
import {AsyncVar} from 'app/core/core.module';
export {ShariablesService};

////////////////////////////////////////////////////////////////////////////////
//TODO: Does this *need* to be an Angular service?  All of its members are static.  It doesn't even really need to be a class.
@Injectable()
/** Asynchronously stores and distributes variables.
 *  A great way to share data across the app.
 */
class ShariablesService {
    [key: string]: nil|AsyncVar<unknown>;

    //TODO; Variables go here
}
