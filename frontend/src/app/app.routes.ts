import {Route, Routes} from '@angular/router';
import {Helpers} from './shared/shared.module';
export {appRoutes};

////////////////////////////////////////////////////////////////////////////////
const appRoutes: Routes = Array<Route>(

    //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //
    // Primary routes
    {
        path: 'admin',
        pathMatch: 'full',
        loadChildren: Helpers.loadChildren('AdminModule'),
    }, {
        path: 'auth',
        pathMatch: 'full',
        loadChildren: Helpers.loadChildren('AuthModule'),
    }, {
        path: 'error',
        pathMatch: 'full',
        loadChildren: Helpers.loadChildren('ErrorModule'),
    }, {
        path: '',
        pathMatch: 'full',
        loadChildren: Helpers.loadChildren('HomeModule'),
    },

    //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //
    // Alias routes
    {
        path: 'home',
        pathMatch: 'full',
        redirectTo: '',
    }, {
        path: 'index',
        pathMatch: 'full',
        redirectTo: '',
    }, {
        path: 'login',
        pathMatch: 'full',
        redirectTo: 'auth',
    },

    //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //
    // Default route
    {
        path: '**',
        redirectTo: 'error?code=404',
    }
);
