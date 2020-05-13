import {NgModule, Optional, SkipSelf} from '@angular/core';
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
    providers: [
        ShariablesService,
        EndpointsService,
    ],
})

//  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //
/** Application-specific code that is shared between multiple modules. */
class SharedModule {
    constructor (
        @Optional() @SkipSelf() parent?: SharedModule,
    ) {
        if(parent) throw new Error('`SharedModule` is already loaded.');
        return this;
    }
}
