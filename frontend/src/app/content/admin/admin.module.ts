import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';

//  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //
import {FrameworkModule, I18N_BUNDLE} from 'app/framework/framework.module';
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
        FrameworkModule,
        SharedModule,
        RouterModule.forChild(adminRoutes),
    ],
    exports: [],
    declarations: [],
    providers: [
        {provide: I18N_BUNDLE, useValue: ADMIN_I18N},
    ],
})
class AdminModule {}
