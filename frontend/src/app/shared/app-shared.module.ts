import {NgModule, ModuleWithProviders} from '@angular/core';
import {CommonModule} from '@angular/common';

// Services
import {ConsoleService} from './services/console.service';
import {VariableService} from './services/variable.service';

////////////////////////////////////////////////////////////////////////////////
@NgModule({
    imports: [
        CommonModule,
    ],
    exports: [],
    declarations: [
        ConsoleService,
        VariableService,
    ],
    providers: [],
})
/** Contains code that is common to or shared between all or most other modules. */
export class AppSharedModule {

    //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //
    /** Provides singleton services that should only be initialized once. */
    static readonly forRoot = (): ModuleWithProviders => {
        return {
            ngModule: AppSharedModule,
            providers: [
                ConsoleService,
                VariableService,
            ],
        };
    }
}
