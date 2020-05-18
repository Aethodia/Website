import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

//  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //
import {FrameworkModule, setI18n} from 'app/framework/framework.module';
import {SharedModule} from 'app/shared/shared.module';

//  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //
import {mainRoutes} from './main.routes';
import {MAIN_I18N} from './main.i18n';

//  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //
import {HomeComponent} from './home/home.component';
import {LoginComponent} from './login/login.component';

//  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //
export {
    MainModule,
    mainRoutes,
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
        setI18n(MAIN_I18N),
    ],
})
class MainModule {}
