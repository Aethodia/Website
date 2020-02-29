import {Route} from '@angular/router';

//  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //
import {HomeComponent} from './home/home.component';

////////////////////////////////////////////////////////////////////////////////
const routes: Route[] = [{
    path: '',
    pathMatch: 'full',
    component: HomeComponent,
}, {
    path: '**',
    loadChildren: async() => (await import('../response-codes/response-codes.module')).ResponseCodesModule,
}];

////////////////////////////////////////////////////////////////////////////////
export {routes};
