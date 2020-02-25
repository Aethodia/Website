import {NgModule, ModuleWithProviders} from '@angular/core';
import {CommonModule} from '@angular/common';

//  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //
import {AppRestService} from './services/rest.service';
import {AppVariableService} from './services/variable.service';

////////////////////////////////////////////////////////////////////////////////
@NgModule({
    imports: [CommonModule],
})

//  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //
/** Contains code that is shared between different modules in the application. */
class AppSharedModule {

    //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //
    /** Provides singleton services that should only be initialized once. */
    public static forRoot(): ModuleWithProviders<AppSharedModule> {
        return {
            ngModule: AppSharedModule,
            providers: [
                AppRestService,
                AppVariableService,
            ],
        };
    }
}

////////////////////////////////////////////////////////////////////////////////
export {AppSharedModule};
