import {Injectable, LOCALE_ID, Inject} from '@angular/core';

//  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //
import {AsyncVar} from '../classes/async-var.class';
import {MetadataService} from './metadata.service';
import {Utils} from '../utils/utils';

//  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //
export {I18nService};

////////////////////////////////////////////////////////////////////////////////
@Injectable()
/** Handles localization. */
class I18nService {

    public readonly language: AsyncVar<string>;
    public readonly country:  AsyncVar<string>;
    public readonly monetary: AsyncVar<string>;

    ////////////////////////////////////////////////////////////////////////////////
    constructor(
        @Inject(LOCALE_ID) private readonly DEFAULT_LOCALE: string,
        meta: MetadataService,
    ) {

        //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //
        this.language = new (
            class extends AsyncVar<string> {
                public set(locale: string): void {
                    locale = Utils.formatLocale(locale);
                    this.subject.next(locale);
                    meta.lang.set(locale);
                }
            }
        )();

        //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //
        this.country  = new AsyncVar();
        this.monetary = new AsyncVar();

        //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //
        this.ngOnInit();
        return this;
    }

    ////////////////////////////////////////////////////////////////////////////////
    public ngOnInit(): void {
        this.language.set(this.DEFAULT_LOCALE);
    }
}
