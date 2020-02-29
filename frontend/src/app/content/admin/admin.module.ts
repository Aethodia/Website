import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';

//  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //
import {adminRoutes} from './admin.routes';
import {I18nComponent} from './i18n/i18n.component';

////////////////////////////////////////////////////////////////////////////////
@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(adminRoutes),
    ],
    exports: [],
    declarations: [
        I18nComponent,
    ],
    providers: [],
})

//  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //
class AdminModule {}

////////////////////////////////////////////////////////////////////////////////
export {
    AdminModule,
};
