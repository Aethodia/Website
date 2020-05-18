import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

//  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //
import {CoreModule, setI18n} from 'app/core/core.module';
import {SharedModule} from 'app/shared/shared.module';

//  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //
import {mainRoutes} from './main.routes';
import {MAIN_I18N} from './main.i18n';

//  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //
import {HomeComponent} from './home/home.component';

//  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //
export {
    MainModule,
    mainRoutes,
};

////////////////////////////////////////////////////////////////////////////////
@NgModule({
    imports: [
        CommonModule,
        CoreModule,
        SharedModule,
    ],
    exports: [],
    declarations: [
        HomeComponent,
    ],
    providers: [
        setI18n(MAIN_I18N),
    ],
})
class MainModule {}
