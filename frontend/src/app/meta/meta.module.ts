import {NgModule, ModuleWithProviders} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HttpClientModule} from '@angular/common/http';

//  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //
import {AppAnalyticsService} from './services/analytics.service';
import {AppBackendService} from './services/backend.service';
import {AppConsoleService} from './services/console.service';
import {AppLocaleService} from './services/locale.service';
import {AppEnvService} from './services/env.service';

////////////////////////////////////////////////////////////////////////////////
@NgModule({
    imports: [
        CommonModule,
        HttpClientModule,
    ],
})

//  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //
/** Code that is essential to the basic functioning of the application.
 *  Amounts to a custom framework on-top of Angular.
 */
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
                AppEnvService,
            ],
        };
    }
}

////////////////////////////////////////////////////////////////////////////////
export {AppMetaModule};
