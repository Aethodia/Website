import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

//  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //
import {AppRoutingModule} from './routing.module';
import {AppSharedModule} from './shared/shared.module';
import {AppMainModule} from './main/main.module';

//  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //
import {AppRoutingComponent} from './routing.module';

////////////////////////////////////////////////////////////////////////////////
@NgModule({
    imports: [
        BrowserModule,

        // Custom
        AppRoutingModule,
        AppSharedModule.forRoot(),
        AppMainModule,
    ],
    bootstrap: [
        AppRoutingComponent,
    ],
})

//  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //
class AppModule {}

////////////////////////////////////////////////////////////////////////////////
export {
    AppModule,
}
