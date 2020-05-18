import {Route, Routes} from '@angular/router';

//  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //
import {Error401Component} from './error-401/error-401.component';
import {Error403Component} from './error-403/error-403.component';
import {Error404Component} from './error-404/error-404.component';

//  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //
export {responseCodeRoutes};

////////////////////////////////////////////////////////////////////////////////
const responseCodeRoutes: Routes = Array<Route>({
    path: '401',
    pathMatch: 'full',
    component: Error401Component,
}, {
    path: '403',
    pathMatch: 'full',
    component: Error403Component,
}, {
    path: '404',
    pathMatch: 'full',
    component: Error404Component,
}, {
    path: '**',
    component: Error404Component,
});
