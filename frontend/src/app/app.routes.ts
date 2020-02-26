import {Route} from '@angular/router';

//  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //
import {ErrorComponent} from './pages/error/error.module';
import {HomeComponent} from "./pages/home/home.module";

////////////////////////////////////////////////////////////////////////////////
const appRoutes: Route[] = [{
    path: '',
    pathMatch: 'full',
    component: HomeComponent,
}, {
    path: 'error',
    pathMatch: 'full',
    component: ErrorComponent,
}, {
    path: '**',
    redirectTo: '404'
}];

////////////////////////////////////////////////////////////////////////////////
export {appRoutes};
