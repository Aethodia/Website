import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

//  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //
import {Error401Component} from './error-401/error-401.component';
import {Error403Component} from './error-403/error-403.component';
import {Error404Component} from './error-404/error-404.component';

////////////////////////////////////////////////////////////////////////////////
@NgModule({
    imports: [
        CommonModule,
    ],
    exports: [],
    declarations: [
        Error401Component,
        Error403Component,
        Error404Component,
    ],
    providers: [],
})

//  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //
/** Pages for HTTP response status codes.
 * {@link https://en.wikipedia.org/wiki/List_of_HTTP_status_codes}
 */
class ResponseCodesModule {}

////////////////////////////////////////////////////////////////////////////////
export {
    ResponseCodesModule,
};
