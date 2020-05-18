import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

//  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //
import {FrameworkModule, I18N_BUNDLE} from 'app/framework/framework.module';
import {SharedModule} from 'app/shared/shared.module';

//  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //
import {defaultRoutes} from './default.routes';
import {DEFAULT_I18N} from './default.i18n';

//  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //
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
    providers: [
        {provide: I18N_BUNDLE, useValue: DEFAULT_I18N},
    ],
})
class DefaultModule {}
