import {Route} from '@angular/router';

//  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //
import {Helpers} from 'app/framework/framework.module';
import {HomeComponent} from './home/home.component';

////////////////////////////////////////////////////////////////////////////////
const routes: Route[] = [{
    path: '',
    pathMatch: 'full',
    component: HomeComponent,
}, {
    path: 'home',
    pathMatch: 'full',
    redirectTo: '',
}, {
    path: 'index',
    pathMatch: 'full',
    redirectTo: '',
}, {
    path: '**',
    loadChildren: Helpers.loadChildren('ResponseCodesModule'),
}];

////////////////////////////////////////////////////////////////////////////////
export {routes};
