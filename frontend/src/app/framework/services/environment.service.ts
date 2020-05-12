import {Injectable, isDevMode} from '@angular/core';
import {AsyncVar} from '../classes/async-var.class';
export {EnvironmentService};

////////////////////////////////////////////////////////////////////////////////
@Injectable()
/** Asynchronously stores and distributes environment variables.
 *  A great way to share data across the app.
 */
class EnvironmentService {

    //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //
    /** Asynchronous environment variables. */
    public readonly vars = class Vars extends Table<AsyncVar<unknown>> {
        public static readonly language: AsyncVar<string> = new AsyncVar();
        public static readonly country:  AsyncVar<string> = new AsyncVar();
        public static readonly monetary: AsyncVar<string> = new AsyncVar();
    }

    //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //
    /** Synchronous environment constants. */
    public readonly consts = class Consts extends Object {
        public static readonly isDevMode: boolean = isDevMode();
    }
}
