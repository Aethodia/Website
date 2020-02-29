import {Route} from '@angular/router';

//  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //
import {Error404Component} from './content/response-codes/response-codes.module';
import {I18nComponent} from './content/admin/admin.module';
import {HomeComponent} from './content/pages/pages.module';

////////////////////////////////////////////////////////////////////////////////
const appRoutes: Route[] = [{
    path: '',
    pathMatch: 'full',
    component: HomeComponent,
}, {
    path: 'i18n',
    pathMatch: 'full',
    component: I18nComponent,
}, {
    path: '404',
    pathMatch: 'full',
    component: Error404Component,
}, {
    path: '**',
    redirectTo: '404'
}];

////////////////////////////////////////////////////////////////////////////////
export {appRoutes};
