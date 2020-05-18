import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

//  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //
import {CoreModule, setI18n} from 'app/core/core.module';
import {SharedModule} from 'app/shared/shared.module';

//  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //
import {authRoutes} from './auth.routes';
import {AUTH_I18N} from './auth.i18n';

//  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //
import {LoginComponent} from './login/login.component';
import {LogoutComponent} from './logout/logout.component';

//  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //
export {
    AuthModule,
    authRoutes,
};

////////////////////////////////////////////////////////////////////////////////
@NgModule({
    imports: [
        CommonModule,
        CoreModule,
        SharedModule,
    ],
    exports: [],
    declarations: [
        LoginComponent,
        LogoutComponent,
    ],
    providers: [
        setI18n(AUTH_I18N),
    ],
})
class AuthModule {}
