import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppSharedModule} from './shared/app-shared.module';

import {AppComponent} from './app.component';

////////////////////////////////////////////////////////////////////////////////
@NgModule({
    imports: [
        BrowserModule,

        // Custom
        AppRoutingModule,
        AppSharedModule.forRoot(),
    ],
    exports: [],
    declarations: [
        AppComponent,
    ],
    providers: [],
    bootstrap: [
        AppComponent,
    ],
})
export class AppModule {}
