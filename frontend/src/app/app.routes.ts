import {Route, Routes} from '@angular/router';
import {Helpers} from './shared/shared.module';
export {appRoutes};

////////////////////////////////////////////////////////////////////////////////
const appRoutes: Routes = Array<Route>(

    //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //
    // Primary routes
    {
        path: 'admin',
        loadChildren: Helpers.loadChildren('AdminModule'),
    }, {
        path: 'auth',
        loadChildren: Helpers.loadChildren('AuthModule'),
    }, {
        path: 'error',
        loadChildren: Helpers.loadChildren('ResponseCodesModule'),
    }, {
        path: 'home',
        loadChildren: Helpers.loadChildren('MainModule'),
    },

    //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //
    // Alias routes
    {
        path: '',
        redirectTo: 'home',
    }, {
        path: 'index',
        redirectTo: 'home',
    }, {
        path: 'login',
        redirectTo: 'auth',
    },

    //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //
    // Default route
    {
        path: '**',
        redirectTo: 'error?code=404',
    }
);
