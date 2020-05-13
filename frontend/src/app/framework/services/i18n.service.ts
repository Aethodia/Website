import {Injectable, OnInit, LOCALE_ID, Inject} from '@angular/core';

//  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //
import {AsyncVar} from '../classes/async-var.class';
import {DocumentService} from './document.service';
import {Utils} from '../utils/utils';

//  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //
export {I18nService};

////////////////////////////////////////////////////////////////////////////////
@Injectable()
/** Handles localization. */
class I18nService implements OnInit{

    public readonly language: AsyncVar<string>;
    public readonly country:  AsyncVar<string>;
    public readonly monetary: AsyncVar<string>;

    ////////////////////////////////////////////////////////////////////////////////
    constructor(
        @Inject(LOCALE_ID) private readonly DEFAULT_LOCALE: string,
        docSvc: DocumentService,
    ) {

        //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //
        this.language = new (
            class extends AsyncVar<string> {
                public set(locale: string): void {
                    locale = Utils.formatLocale(locale);
                    this.subject.next(locale);
                    docSvc.set.lang(locale);
                }
            }
        )();

        //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //
        this.country  = new AsyncVar();
        this.monetary = new AsyncVar();

        //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //
        return this;
    }

    ////////////////////////////////////////////////////////////////////////////////
    public ngOnInit(): void {
        this.language.set(this.DEFAULT_LOCALE);
    }
}
