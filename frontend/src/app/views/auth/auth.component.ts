import {Component} from '@angular/core';
import {MetadataService, I18nPipe} from 'app/core/core.module';
export {AuthComponent};

////////////////////////////////////////////////////////////////////////////////
@Component({
    templateUrl: './auth.template.html',
})
class AuthComponent {

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
}
