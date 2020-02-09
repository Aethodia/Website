import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

//  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //
import {AppRoutingModule} from './app-routing.module';
import {AppSharedModule} from './shared/app-shared.module';
import {AppMainModule} from './main/app-main.module';

////////////////////////////////////////////////////////////////////////////////
@NgModule({
    imports: [
        BrowserModule,

        // Custom
        AppRoutingModule,
        AppSharedModule.forRoot(),
        AppMainModule,
    ],
    exports: [],
    declarations: [],
    providers: [],
    bootstrap: [],
})

//  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //
export class AppModule {}
