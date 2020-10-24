import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {RouterModule} from '@angular/router';

//  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //
import {appRoutes} from './root.routes';
import {CoreModule} from '../core/core.module';
import {SharedModule} from '../shared/shared.module';

//  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //
import {RootComponent} from './root.component';
import {GlobalHeaderComponent} from './components/global-header/global-header.component';
import {GlobalFooterComponent} from './components/global-footer/global-footer.component';

//  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //
export {RootModule};

////////////////////////////////////////////////////////////////////////////////
//TODO: Server-Side Rendering (https://angular.io/guide/universal)
@NgModule({
    imports: [

        // Libraries
        BrowserModule,
        BrowserAnimationsModule,
        RouterModule.forRoot(appRoutes, {
            // enableTracing: true, //DEBUG
        }),

        // Common
        CoreModule.forRoot(),
        SharedModule.forRoot(),
    ],
    declarations: [
        RootComponent,
        GlobalHeaderComponent,
        GlobalFooterComponent,
    ],
    bootstrap: [RootComponent],
})
class RootModule {}
