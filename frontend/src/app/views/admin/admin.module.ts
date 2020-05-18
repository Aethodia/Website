import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';

//  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //
import {CoreModule, setI18n} from 'app/core/core.module';
import {SharedModule} from 'app/shared/shared.module';

//  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //
import {adminRoutes} from './admin.routes';
import {ADMIN_I18N} from './admin.i18n';

//  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //
export {
    AdminModule,
    adminRoutes,
};

////////////////////////////////////////////////////////////////////////////////
@NgModule({
    imports: [
        CommonModule,
        CoreModule,
        SharedModule,
        RouterModule.forChild(adminRoutes),
    ],
    exports: [],
    declarations: [],
    providers: [
        setI18n(ADMIN_I18N),
    ],
})
class AdminModule {}
