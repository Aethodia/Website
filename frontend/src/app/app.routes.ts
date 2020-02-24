import {Route} from '@angular/router';

//  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //
import {AppPagesErrorComponent} from './pages/error/error.module';
import {AppPagesHomeComponent} from "./pages/home/home.module";

////////////////////////////////////////////////////////////////////////////////
const appRoutes: Route[] = [{
    path: '',
    pathMatch: 'full',
    component: AppPagesHomeComponent,
}, {
    path: '404',
    pathMatch: 'full',
    component: AppPagesErrorComponent,
}, {
    path: '**',
    redirectTo: '404'
}];

////////////////////////////////////////////////////////////////////////////////
export {appRoutes};
