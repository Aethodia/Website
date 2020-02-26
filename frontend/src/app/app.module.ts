import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {RouterModule} from '@angular/router';

//  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //
import {appRoutes} from './app.routes';
import {AppComponent} from './app.component';

//  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //
import {MetaModule} from './meta/meta.module';
import {SharedModule} from './shared/shared.module';
import {HomeModule} from './pages/home/home.module';
import {ErrorModule} from './pages/error/error.module';

////////////////////////////////////////////////////////////////////////////////
@NgModule({
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        RouterModule.forRoot(appRoutes),

        // Common
        MetaModule.forRoot(),
        SharedModule.forRoot(),

        // Pages
        ErrorModule,
        HomeModule,
    ],
    declarations: [AppComponent],
    bootstrap: [AppComponent],
})

//  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //
class AppModule {}

////////////////////////////////////////////////////////////////////////////////
export {AppModule};
