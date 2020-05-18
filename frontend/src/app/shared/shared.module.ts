import {NgModule, ModuleWithProviders, Optional, SkipSelf} from '@angular/core';
import {CommonModule} from '@angular/common';

//  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //
import {FrameworkModule, setI18n} from 'app/framework/framework.module';
import {SHARED_I18N} from './shared.i18n';
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
        FrameworkModule,
    ],
    exports: [],
    declarations: [],
    providers: [
        setI18n(SHARED_I18N),
    ],
})

//  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //
/** Application-specific code that is shared between multiple modules. */
class SharedModule {
    constructor (
        // Services
        ShariablesService: ShariablesService,
        EndpointsService: EndpointsService,

        // Misc
        @Optional() @SkipSelf() parent?: SharedModule,
    ) {
        // if(parent) throw new Error('`SharedModule` is already loaded.');
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
