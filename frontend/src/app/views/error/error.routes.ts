import {Route, Routes} from '@angular/router';
import {ErrorComponent} from './error.component';
export {errorRoutes};

////////////////////////////////////////////////////////////////////////////////
const errorRoutes: Routes = Array<Route>({
    path: '',
    pathMatch: 'full',
    component: ErrorComponent,
});
