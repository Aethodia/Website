import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

//  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //
import {ErrorComponent} from './error/error.component';
import {HomeComponent} from './home/home.component';
import {I18nComponent} from './i18n/i18n.component';

////////////////////////////////////////////////////////////////////////////////
@NgModule({
    imports: [
        CommonModule,
    ],
    exports: [],
    declarations: [
        I18nComponent,
    ],
    providers: [],
})

//  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //
class PagesModule {}

////////////////////////////////////////////////////////////////////////////////
export {
    PagesModule,
    ErrorComponent,
    HomeComponent,
    I18nComponent,
};
