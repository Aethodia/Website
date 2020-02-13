import {NgModule, ModuleWithProviders} from '@angular/core';
import {CommonModule} from '@angular/common';

//  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //
import {AppAnalyticsService} from './services/analytics.service';
import {AppBackendService} from './services/backend.service';
import {AppConsoleService} from './services/console.service';
import {AppLocaleService} from './services/locale.service';
import {AppVariableService} from './services/variable.service';

////////////////////////////////////////////////////////////////////////////////
@NgModule({
    imports: [
        CommonModule,
    ],
    exports: [],
    declarations: [],
    providers: [],
})

//  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //
/** Contains code that is common to or shared between all or most other modules. */
class AppSharedModule {

    //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //
    /** Provides singleton services that should only be initialized once. */
    public static forRoot(): ModuleWithProviders<AppSharedModule> {
        return {
            ngModule: AppSharedModule,
            providers: [
                AppAnalyticsService,
                AppBackendService,
                AppConsoleService,
                AppLocaleService,
                AppVariableService,
            ],
        };
    }
}

////////////////////////////////////////////////////////////////////////////////
export {
    AppSharedModule,
}
