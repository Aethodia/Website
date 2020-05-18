import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';

//  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //
import {CoreModule, setI18n} from 'app/core/core.module';
import {SharedModule} from 'app/shared/shared.module';

//  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //
import {errorRoutes} from './error.routes';
import {ERROR_I18N} from './error.i18n';
import {ErrorComponent} from './error.component';

//  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //
export {
    ErrorModule,
    errorRoutes,
};

////////////////////////////////////////////////////////////////////////////////
@NgModule({
    imports: [
        CommonModule,
        CoreModule,
        SharedModule,
        RouterModule.forChild(errorRoutes),
    ],
    exports: [],
    declarations: [
        ErrorComponent,
    ],
    providers: [
        setI18n(ERROR_I18N),
    ],
})

//  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //
/** Pages for HTTP response status codes.
 * {@link https://en.wikipedia.org/wiki/List_of_HTTP_status_codes}
 */
class ErrorModule {}
