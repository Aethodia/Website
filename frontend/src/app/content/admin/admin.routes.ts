import {Route} from '@angular/router';

//  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //
import {Helpers} from 'app/framework/framework.module';
import {I18nComponent} from './i18n/i18n.component';

////////////////////////////////////////////////////////////////////////////////
const routes: Route[] = [{
    path: 'i18n',
    pathMatch: 'full',
    component: I18nComponent,
}, {
    path: '**',
    loadChildren: Helpers.loadChildren('ResponseCodesModule'),
}];

////////////////////////////////////////////////////////////////////////////////
export {routes};
