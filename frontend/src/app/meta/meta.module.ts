import {NgModule, ModuleWithProviders} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HttpClientModule} from '@angular/common/http';

//  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //
import {AppAnalyticsService} from './services/analytics.service';
import {AppBackendService} from './services/backend.service';
import {AppConsoleService} from './services/console.service';
import {AppLocaleService} from './services/locale.service';

////////////////////////////////////////////////////////////////////////////////
@NgModule({
    imports: [
        CommonModule,
        HttpClientModule,
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
            ],
        };
    }
}

////////////////////////////////////////////////////////////////////////////////
export {AppMetaModule};
