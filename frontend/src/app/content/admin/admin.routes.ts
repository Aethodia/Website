import {Route} from '@angular/router';

//  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //
import {I18nComponent} from './i18n/i18n.component';

////////////////////////////////////////////////////////////////////////////////
const routes: Route[] = [{
    path: 'i18n',
    pathMatch: 'full',
    component: I18nComponent,
}, {
    path: '**',
    loadChildren: async() => (await import('../response-codes/response-codes.module')).ResponseCodesModule,
}];

////////////////////////////////////////////////////////////////////////////////
export {routes};
