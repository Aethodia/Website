import {Route, Routes} from '@angular/router';

//  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //
import {Helpers} from './shared/shared.module';
import {mainRoutes} from './content/main/main.module';
import {responseCodeRoutes} from './content/response-codes/response-codes.module';

//  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //
export {appRoutes};

////////////////////////////////////////////////////////////////////////////////
const appRoutes: Routes = Array<Route>({
    path: 'admin',
    loadChildren: Helpers.loadChildren('AdminModule'),
}).concat(
    mainRoutes,
    responseCodeRoutes,
);
