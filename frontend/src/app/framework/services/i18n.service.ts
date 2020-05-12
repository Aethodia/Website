import {Injectable, OnInit, LOCALE_ID, Inject} from '@angular/core';
import {EnvironmentService} from './environment.service';
export {I18nService};

////////////////////////////////////////////////////////////////////////////////
@Injectable()
/** Handles the localization. */
class I18nService implements OnInit{

    //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //
    constructor(
        private readonly envSvc: EnvironmentService,
        @Inject(LOCALE_ID) private readonly DEFAULT_LOCALE: string,
    ) {
        this.envSvc.vars.language.set(this.DEFAULT_LOCALE);
        return this;
    }

    //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //
    public ngOnInit(): void {
        //TODO
    }
}
