import {Route} from '@angular/router';
import {Helpers} from './framework/framework.module';

////////////////////////////////////////////////////////////////////////////////
const routes: Route[] = [{
    path: 'admin',
    pathMatch: 'full',
    loadChildren: Helpers.loadChildren('AdminModule'),
}, {
    path: '**',
    loadChildren: Helpers.loadChildren('DefaultModule'),
}];

////////////////////////////////////////////////////////////////////////////////
export {routes};
