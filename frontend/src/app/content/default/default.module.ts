import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';

//  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //
import {routes} from './default.routes';
import {HomeComponent} from './home/home.component';
import {LoginComponent} from './login/login.component';

////////////////////////////////////////////////////////////////////////////////
@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(routes),
    ],
    exports: [],
    declarations: [
        HomeComponent,
        LoginComponent,
    ],
    providers: [],
})

//  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //
class DefaultModule {}

////////////////////////////////////////////////////////////////////////////////
export {
    DefaultModule,
};
