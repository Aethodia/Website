import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

//  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //
import {FrameworkModule} from 'app/framework/framework.module';
import {SharedModule} from 'app/shared/shared.module';
import {defaultRoutes} from './default.routes';
import {HomeComponent} from './home/home.component';
import {LoginComponent} from './login/login.component';

//  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //
export {
    DefaultModule,
    defaultRoutes,
};

////////////////////////////////////////////////////////////////////////////////
@NgModule({
    imports: [
        CommonModule,
        FrameworkModule,
        SharedModule,
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
