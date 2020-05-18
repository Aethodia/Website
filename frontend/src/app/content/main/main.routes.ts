import {Route, Routes} from '@angular/router';
import {HomeComponent} from './home/home.component';

//  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //
export {mainRoutes};

////////////////////////////////////////////////////////////////////////////////
const mainRoutes: Routes = Array<Route>({
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
});
