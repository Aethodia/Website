import {Component} from "@angular/core";
import {MetadataService, I18nPipe} from 'app/core/core.module';
export {ErrorComponent};

////////////////////////////////////////////////////////////////////////////////
@Component({
    templateUrl: './error.template.html',
})
/** Displays messages for various errors.. */
class ErrorComponent {

    /** An HTTP status code.
     * {@link https://en.wikipedia.org/wiki/List_of_HTTP_status_codes}
     */
    private errorCode: number = NaN;

    //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //
    constructor(
        private readonly meta: MetadataService,
        private readonly i18n: I18nPipe,
    ) {
        return this;
    }

    //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //
    public ngOnInit(): void {
        this.meta.quickSet(this.i18n);
    }

    //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //
    public getErrorKey(): string {
        return String(this.errorCode);
    }
}
