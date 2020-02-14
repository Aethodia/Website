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
})

//  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //
/** Contains code that is essential to the basic functioning of the application. */
class AppMetaModule {

    //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //
    /** Provides singleton services that should only be initialized once. */
    public static forRoot(): ModuleWithProviders<AppMetaModule> {
        return {
            ngModule: AppMetaModule,
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
    AppMetaModule,
}
