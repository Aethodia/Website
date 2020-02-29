import {Route} from '@angular/router';

//  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //
import {Helpers} from './framework/framework.module';
import {defaultRoutes} from './content/default/default.routes';
import {responseCodeRoutes} from './content/response-codes/response-codes.routes';

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
