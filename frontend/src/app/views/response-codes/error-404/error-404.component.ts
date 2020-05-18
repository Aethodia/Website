import {Component} from "@angular/core";
export {ErrorComponent};

////////////////////////////////////////////////////////////////////////////////
@Component({
    templateUrl: './error.component.html',
})
/** Displays messages for various errors.. */
class ErrorComponent {
    public errorMessageKey: string = '';
    //TODO
}
