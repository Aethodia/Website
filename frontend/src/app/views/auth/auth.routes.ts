import {Route, Routes} from '@angular/router';
import {AuthComponent} from './auth.component';
export {authRoutes};

////////////////////////////////////////////////////////////////////////////////
const authRoutes: Routes = Array<Route>({
    path: '',
    pathMatch: 'full',
    component: AuthComponent,
});
