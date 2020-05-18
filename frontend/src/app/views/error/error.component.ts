import {Component} from "@angular/core";
export {ErrorComponent};

////////////////////////////////////////////////////////////////////////////////
@Component({
    templateUrl: './error.component.html',
})
/** Displays messages for various errors.. */
class ErrorComponent {

    /** An HTTP status code.
     * {@link https://en.wikipedia.org/wiki/List_of_HTTP_status_codes}
     */
    private errorCode: number = NaN;

    //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //
    public getErrorKey(): string {
        return String(this.errorCode);
    }
}
