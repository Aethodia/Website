import {Component} from "@angular/core";
export {ErrorComponent};

////////////////////////////////////////////////////////////////////////////////
@Component({
    templateUrl: './error.component.html',
})
/** Displays messages for various errors.. */
class ErrorComponent {
    private errorCode: number = NaN;

    //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //
    public getErrorKey(): string {
        return String(this.errorCode);
    }
}
