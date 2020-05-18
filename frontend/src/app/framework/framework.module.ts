import {ModuleWithProviders, NgModule, Optional, SkipSelf} from '@angular/core';
import {AsyncPipe, CommonModule} from '@angular/common';
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';

//  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //
import {setI18n} from './consts/i18n.const';
import {Utils} from './utils/utils';

//  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //
import {AsyncVar} from './classes/async-var.class';
import {Endpoint, EndpointSettings} from './classes/endpoint.class';
import {HttpOptions} from './classes/http-options.class';

//  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //
import {AnalyticsService} from './services/analytics.service';
import {BackendService} from './services/backend.service';
import {ConsoleService} from './services/console.service';
import {MetadataService} from './services/metadata.service';
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
    setI18n,
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
    MetadataService,
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
        setI18n({}),

        // Pipes
        AsyncPipe,
        I18nPipe,
        DatetimePipe,
        NumberPipe,
    ],
})

//  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //
/** Code that is essential to the basic functioning of the application.
 *  Amounts to a custom framework on-top of Angular.
 * @warn Should only be included in the top-most module.
 */
class FrameworkModule {
    constructor (
        // Services
        EnvironmentService: EnvironmentService,
        ConsoleService:     ConsoleService,
        BackendService:     BackendService,
        MetadataService:    MetadataService,
        I18nService:        I18nService,
        AnalyticsService:   AnalyticsService,

        // Misc
        @Optional() @SkipSelf() parent?: FrameworkModule,
    ) {
        // if(parent) throw new Error('`FrameworkModule` is already loaded.');
        return this;
    }

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
                MetadataService,
                I18nService,
                AnalyticsService,

                // Interceptors
                {provide: HTTP_INTERCEPTORS, useClass:  I18nInterceptor, multi: true},
                {provide: HTTP_INTERCEPTORS, useClass:   LogInterceptor, multi: true},
                {provide: HTTP_INTERCEPTORS, useClass: CacheInterceptor, multi: true},
                {provide: HTTP_INTERCEPTORS, useClass:  MockInterceptor, multi: true},
                {provide: HTTP_INTERCEPTORS, useClass:  AuthInterceptor, multi: true},
                {provide: HTTP_INTERCEPTORS, useClass: RetryInterceptor, multi: true},
            ],
        };
    }
}
