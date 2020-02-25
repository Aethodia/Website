import {NgModule, ModuleWithProviders} from '@angular/core';
import {CommonModule} from '@angular/common';

//  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //
import {AppEndpointService} from './services/endpoint.service';
import {AppVariableService} from './services/variable.service';

////////////////////////////////////////////////////////////////////////////////
@NgModule({
    imports: [CommonModule],
})

//  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //
/** Application-specific code that is shared between multiple modules. */
class AppSharedModule {

    //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //
    /** Provides singleton services that should only be initialized once. */
    public static forRoot(): ModuleWithProviders<AppSharedModule> {
        return {
            ngModule: AppSharedModule,
            providers: [
                AppEndpointService,
                AppVariableService,
            ],
        };
    }
}

////////////////////////////////////////////////////////////////////////////////
export {AppSharedModule};
