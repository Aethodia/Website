import {NgModule, Optional, SkipSelf} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HttpClientModule} from '@angular/common/http';

//  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //
import {Utils} from './utils/utils';

//  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //
import {AsyncVar} from './classes/async-var.class';
import {Endpoint, EndpointSettings} from './classes/endpoint.class';
import {HttpOptions} from './classes/http-options.class';

//  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //
import {AnalyticsService} from './services/analytics.service';
import {BackendService} from './services/backend.service';
import {ConsoleService} from './services/console.service';
import {DocumentService} from './services/document.service';
import {I18nService} from './services/i18n.service';
import {EnvironmentService} from './services/environment.service';

//  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //
import {DatetimePipe} from './pipes/datetime.pipe';
import {I18nPipe} from './pipes/i18n.pipe';
import {NumberPipe} from './pipes/number.pipe';

//  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //
import {AuthInterceptor} from './interceptors/auth.interceptor';
import {CacheInterceptor} from './interceptors/cache.interceptor';
import {I18nInterceptor} from './interceptors/i18n.interceptor';
import {LogInterceptor} from './interceptors/log.interceptor';
import {MockInterceptor} from './interceptors/mock.interceptor';
import {RetryInterceptor} from './interceptors/retry.interceptor';

//  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //
export {
    FrameworkModule,

    // Misc
    Utils,

    // Classes
    AsyncVar,
    Endpoint,
    EndpointSettings,
    HttpOptions,

    // Services
    AnalyticsService,
    BackendService,
    ConsoleService,
    DocumentService,
    EnvironmentService,
    I18nService,

    // Pipes
    DatetimePipe,
    I18nPipe,
    NumberPipe,

    // Interceptors
    AuthInterceptor,
    CacheInterceptor,
    I18nInterceptor,
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
    exports: [
        // Pipes
        I18nPipe,
        DatetimePipe,
        NumberPipe,
    ],
    declarations: [
        // Pipes
        I18nPipe,
        DatetimePipe,
        NumberPipe,
    ],
    providers: [
        // Services
        EnvironmentService,
        ConsoleService,
        BackendService,
        DocumentService,
        I18nService,
        AnalyticsService,

        // Interceptors
        I18nInterceptor,
        LogInterceptor,
        CacheInterceptor,
        MockInterceptor,
        AuthInterceptor,
        RetryInterceptor,
    ],
})

//  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //
/** Code that is essential to the basic functioning of the application.
 *  Amounts to a custom framework on-top of Angular.
 * @warn Should only be included in the top-most module.
 */
class FrameworkModule {
    constructor (
        @Optional() @SkipSelf() parent?: FrameworkModule,
    ) {
        if(parent) throw new Error('`FrameworkModule` is already loaded.');
        return this;
    }
}
