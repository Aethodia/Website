import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {RouterModule} from '@angular/router';

//  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //
import {appRoutes} from './app.routes';
import {AppComponent} from './app.component';

//  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //
import {AppMetaModule} from './meta/meta.module';
import {AppSharedModule} from './shared/shared.module';
import {AppPagesHomeModule} from './pages/home/home.module';
import {AppPagesErrorModule} from './pages/error/error.module';

////////////////////////////////////////////////////////////////////////////////
@NgModule({
    imports: [
        BrowserModule,
        RouterModule.forRoot(appRoutes),

        // Common
        AppMetaModule.forRoot(),
        AppSharedModule,

        // Pages
        AppPagesErrorModule,
        AppPagesHomeModule,
    ],
    declarations: [
        AppComponent,
    ],
    bootstrap: [
        AppComponent,
    ],
})

//  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //
class AppModule {}

////////////////////////////////////////////////////////////////////////////////
export {AppModule}
