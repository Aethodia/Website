import {Route, Routes} from '@angular/router';
import {I18nComponent} from './i18n/i18n.component';
export {adminRoutes};

////////////////////////////////////////////////////////////////////////////////
const adminRoutes: Routes = Array<Route>({
    path: 'i18n',
    pathMatch: 'full',
    component: I18nComponent,
});
