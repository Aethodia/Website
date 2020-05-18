import {Route, Routes} from '@angular/router';
import {ErrorComponent} from './error.component';
export {errorRoutes};

////////////////////////////////////////////////////////////////////////////////
const errorRoutes: Routes = Array<Route>({
    path: '',
    component: ErrorComponent,
});
