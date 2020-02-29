import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {RouterModule} from '@angular/router';

//  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //
import {appRoutes} from './app.routes';
import {AppComponent} from './app.component';

//  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //
import {FrameworkModule} from './framework/framework.module';
import {SharedModule} from './shared/shared.module';
import {ResponseCodesModule} from './content/response-codes/response-codes.module';
import {AdminModule} from './content/admin/admin.module';
import {PagesModule} from './content/pages/pages.module';

////////////////////////////////////////////////////////////////////////////////
//TODO: SSR (https://angular.io/guide/universal)
@NgModule({
    imports: [

        // Libraries
        BrowserModule,
        BrowserAnimationsModule,
        RouterModule.forRoot(appRoutes),

        // Common
        FrameworkModule.forRoot(),
        SharedModule.forRoot(),

        // Content
        ResponseCodesModule,
        AdminModule,
        PagesModule,
    ],
    declarations: [AppComponent],
    bootstrap: [AppComponent],
})

//  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //
class AppModule {}

////////////////////////////////////////////////////////////////////////////////
export {AppModule};
