import {NgModule} from '@angular/core';
import {Route, RouterModule} from '@angular/router';

//  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //
import {AppRoutingComponent} from './app-routing.component';
import {AppMainComponent} from './main/main.module';

////////////////////////////////////////////////////////////////////////////////
const routes: Route[] = [{
    path: '',
    component: AppMainComponent,
}];

////////////////////////////////////////////////////////////////////////////////
@NgModule({
    imports: [
        RouterModule.forRoot(routes),
    ],
    exports: [
        RouterModule,
    ],
    declarations: [
        AppRoutingComponent,
    ],
})

//  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //
class AppRoutingModule {}

////////////////////////////////////////////////////////////////////////////////
export {
    AppRoutingModule,
    AppRoutingComponent,
}
