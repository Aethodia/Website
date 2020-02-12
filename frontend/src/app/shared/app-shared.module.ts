import {NgModule, ModuleWithProviders} from '@angular/core';
import {CommonModule} from '@angular/common';

//  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //
import {AnalyticsService} from './services/analytics.service';
import {BackendService} from './services/backend.service';
import {ConsoleService} from './services/console.service';
import {LocaleService} from './services/locale.service';
import {VariableService} from './services/variable.service';

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
    static readonly forRoot = (): ModuleWithProviders => {
        return {
            ngModule: AppSharedModule,
            providers: [
                AnalyticsService,
                BackendService,
                ConsoleService,
                LocaleService,
                VariableService,
            ],
        };
    }
}

////////////////////////////////////////////////////////////////////////////////
export {
    AppSharedModule,
}
