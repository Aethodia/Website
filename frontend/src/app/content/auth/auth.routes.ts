import {Route, Routes} from '@angular/router';

//  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //
import {LoginComponent} from './login/login.component';
import {LogoutComponent} from './logout/logout.component';

//  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //
export {authRoutes};

////////////////////////////////////////////////////////////////////////////////
const authRoutes: Routes = Array<Route>({
    path: 'login',
    pathMatch: 'full',
    component: LoginComponent,
}, {
    path: 'logout',
    pathMatch: 'full',
    component: LogoutComponent,
});
