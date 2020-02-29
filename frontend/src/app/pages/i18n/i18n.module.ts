import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

//  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //
import {I18nComponent} from './i18n.component';

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
class I18nModule {}

////////////////////////////////////////////////////////////////////////////////
export {
    I18nModule,
    I18nComponent,
};
