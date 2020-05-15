import {NgModule, ModuleWithProviders, Optional, SkipSelf} from '@angular/core';
import {CommonModule} from '@angular/common';

//  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //
import {Helpers} from './misc/helpers';
import {EndpointsService} from './services/endpoints.service';
import {ShariablesService} from './services/shariables.service';

//  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //
export {
    SharedModule,

    // Misc
    Helpers,

    // Services
    EndpointsService,
    ShariablesService,
};

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
/** Application-specific code that is shared between multiple modules. */
class SharedModule {
    constructor (
        //FIXME: The below insanity should not be necessary in order to get Angular to load these Injectables at start.

        // Services
        ShariablesService: ShariablesService,
        EndpointsService: EndpointsService,

        @Optional() @SkipSelf() parent?: SharedModule,
    ) {
        if(parent) throw new Error('`SharedModule` is already loaded.');
        return this;
    }

    //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //
    /** Provides singleton services that should only be initialized once. */
    public static forRoot(): ModuleWithProviders<SharedModule> {
        return {
            ngModule: SharedModule,
            providers: [
                // Services
                ShariablesService,
                EndpointsService,
            ],
        };
    }
}
