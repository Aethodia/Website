import {NgModule, ModuleWithProviders} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HttpClientModule} from '@angular/common/http';

//  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //
import {AsyncVar} from './misc/async-var.class';
import {Endpoint, EndpointSettings} from './misc/endpoint.class';
import {HttpOptions} from './misc/http-options.class';
import {Utilities} from './misc/utilities.class';

//  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //
import {AnalyticsService} from './services/analytics.service';
import {BackendService} from './services/backend.service';
import {ConsoleService} from './services/console.service';
import {I18nService} from './services/i18n.service';
import {EnvironmentService} from './services/environment.service';

//  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //
import {DatetimePipe} from './pipes/datetime.pipe';
import {I18nPipe} from './pipes/i18n.pipe';
import {NumberPipe} from './pipes/number.pipe';

//  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //
import {AuthInterceptor} from './interceptors/auth.interceptor';
import {CacheInterceptor} from './interceptors/cache.interceptor';
import {LogInterceptor} from './interceptors/log.interceptor';
import {MockInterceptor} from './interceptors/mock.interceptor';
import {RetryInterceptor} from './interceptors/retry.interceptor';

//  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //
export {
    FrameworkModule,

    // Misc
    AsyncVar,
    Endpoint,
    EndpointSettings,
    HttpOptions,
    Utilities,

    // Services
    AnalyticsService,
    BackendService,
    ConsoleService,
    EnvironmentService,
    I18nService,

    // Pipes
    DatetimePipe,
    I18nPipe,
    NumberPipe,

    // Interceptors
    AuthInterceptor,
    CacheInterceptor,
    LogInterceptor,
    MockInterceptor,
    RetryInterceptor,
};

////////////////////////////////////////////////////////////////////////////////
@NgModule({
    imports: [
        CommonModule,
        HttpClientModule,
    ],
    declarations: [
        I18nPipe,
        DatetimePipe,
        NumberPipe,
    ],
})

//  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //
/** Code that is essential to the basic functioning of the application.
 *  Amounts to a custom framework on-top of Angular.
 */
class FrameworkModule {

    //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //
    /** Provides singleton services that should only be initialized once. */
    public static forRoot(): ModuleWithProviders<FrameworkModule> {
        return {
            ngModule: FrameworkModule,
            providers: [
                // Services
                EnvironmentService,
                ConsoleService,
                BackendService,
                I18nService,
                AnalyticsService,

                // Interceptors
                LogInterceptor,
                CacheInterceptor,
                MockInterceptor,
                AuthInterceptor,
                RetryInterceptor,
            ],
        };
    }
}
