import {Route, Routes} from '@angular/router';
import {RouterUtils} from './shared/shared.module';
export {appRoutes};

////////////////////////////////////////////////////////////////////////////////
const appRoutes: Routes = Array<Route>(

    //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //
    {
        path: '',
        pathMatch: 'full',
        loadChildren: RouterUtils.loadChildren('HomeModule'),
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
        loadChildren: RouterUtils.loadChildren('AdminModule'),
    },

    //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //
    {
        path: 'auth',
        pathMatch: 'full',
        loadChildren: RouterUtils.loadChildren('AuthModule'),
    }, {
        path: 'login',
        pathMatch: 'full',
        redirectTo: 'auth',
    },

    //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //
    {
        path: 'error',
        pathMatch: 'full',
        loadChildren: RouterUtils.loadChildren('ErrorModule'),
    }, {
        path: '**',
        redirectTo: 'error?code=404',
    }
);
