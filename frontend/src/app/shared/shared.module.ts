import {NgModule, ModuleWithProviders} from '@angular/core';
import {CommonModule} from '@angular/common';

//  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //
import {Helpers} from './misc/helpers';
import {EndpointsService} from './services/endpoints.service';
import {ShariablesService} from './services/shariables.service';

////////////////////////////////////////////////////////////////////////////////
@NgModule({
    imports: [CommonModule],
})

//  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //
/** Application-specific code that is shared between multiple modules. */
class SharedModule {

    //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //
    /** Provides singleton services that should only be initialized once. */
    public static forRoot(): ModuleWithProviders<SharedModule> {
        return {
            ngModule: SharedModule,
            providers: [
                EndpointsService,
                ShariablesService,
            ],
        };
    }
}

////////////////////////////////////////////////////////////////////////////////
export {
    SharedModule,

    // Misc
    Helpers,

    // Services
    EndpointsService,
    ShariablesService,
};
