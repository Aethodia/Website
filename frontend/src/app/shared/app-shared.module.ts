import {NgModule, ModuleWithProviders} from '@angular/core';
import {CommonModule} from '@angular/common';

//  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //
import {BackendService} from './services/backend.service';
import {ConsoleService} from './services/console.service';
import {LocaleService} from './services/locale.service';
import {UtilityService} from './services/utility.service';
import {VariableService} from './services/variable.service';

////////////////////////////////////////////////////////////////////////////////
@NgModule({
    imports: [
        CommonModule,
    ],
    exports: [],
    declarations: [
        BackendService,
        ConsoleService,
        LocaleService,
        UtilityService,
        VariableService,
    ],
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
                BackendService,
                ConsoleService,
                LocaleService,
                UtilityService,
                VariableService,
            ],
        };
    }
}

////////////////////////////////////////////////////////////////////////////////
export {
    AppSharedModule,
}
