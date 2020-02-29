import {Route} from '@angular/router';

//  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //
import {Helpers} from './shared/shared.module';
import {defaultRoutes} from './content/default/default.module';
import {responseCodeRoutes} from './content/response-codes/response-codes.module';

////////////////////////////////////////////////////////////////////////////////
const appRoutes: Route[] = ([] as Route[]).concat(
    [{
        path: 'admin',
        loadChildren: Helpers.loadChildren('AdminModule'),
    }],
    defaultRoutes,
    responseCodeRoutes,
);

////////////////////////////////////////////////////////////////////////////////
export {appRoutes};
