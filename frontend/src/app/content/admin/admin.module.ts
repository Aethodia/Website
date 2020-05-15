import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';

//  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //
import {FrameworkModule} from 'app/framework/framework.module';
import {SharedModule} from 'app/shared/shared.module';
import {adminRoutes} from './admin.routes';

//  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //
export {AdminModule};

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
    providers: [],
})
class AdminModule {}
