import {Route} from '@angular/router';
import {HomeComponent} from './home/home.component';

////////////////////////////////////////////////////////////////////////////////
const defaultRoutes: Route[] = [{
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
}];

////////////////////////////////////////////////////////////////////////////////
export {defaultRoutes};
