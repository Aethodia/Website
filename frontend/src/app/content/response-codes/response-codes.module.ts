import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';

//  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //
import {routes} from './response-codes.routes';
import {Error404Component} from './error-404/error-404.component';

////////////////////////////////////////////////////////////////////////////////
@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(routes),
    ],
    exports: [],
    declarations: [
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
