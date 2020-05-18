import {Route, Routes} from '@angular/router';
import {Helpers} from './shared/shared.module';
export {appRoutes};

////////////////////////////////////////////////////////////////////////////////
const appRoutes: Routes = Array<Route>(

    //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //
    {
        path: '',
        pathMatch: 'full',
        loadChildren: Helpers.loadChildren('HomeModule'),
    }, {
        path: 'home',
        pathMatch: 'full',
        redirectTo: '',
    }, {
        path: 'index',
        pathMatch: 'full',
        redirectTo: '',
    },

    //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //
    {
        path: 'admin',
        pathMatch: 'full',
        loadChildren: Helpers.loadChildren('AdminModule'),
    },

    //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //
    {
        path: 'auth',
        pathMatch: 'full',
        loadChildren: Helpers.loadChildren('AuthModule'),
    }, {
        path: 'login',
        pathMatch: 'full',
        redirectTo: 'auth',
    },

    //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //
    {
        path: 'error',
        pathMatch: 'full',
        loadChildren: Helpers.loadChildren('ErrorModule'),
    }, {
        path: '**',
        redirectTo: 'error?code=404',
    }
);
