import {Route, Routes} from '@angular/router';

//  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //
import {Helpers} from './shared/shared.module';
import {mainRoutes} from './views/main/main.module';
import {responseCodeRoutes} from './views/response-codes/response-codes.module';

//  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //
export {appRoutes};

////////////////////////////////////////////////////////////////////////////////
const appRoutes: Routes = Array<Route>({
    path: 'admin',
    loadChildren: Helpers.loadChildren('AdminModule'),
}, {
    path: 'auth',
    loadChildren: Helpers.loadChildren('AuthModule'),
}).concat(
    mainRoutes,
    responseCodeRoutes,
);
