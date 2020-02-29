import {Route} from '@angular/router';

//  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //
import {ErrorComponent} from './pages/pages.module';
import {HomeComponent} from "./pages/pages.module";

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
