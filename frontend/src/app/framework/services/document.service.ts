import {Injectable, Inject} from '@angular/core';
import {DOCUMENT} from '@angular/common';
import {Title, Meta} from '@angular/platform-browser';

//  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //
export {DocumentService};

////////////////////////////////////////////////////////////////////////////////
@Injectable()
/** Manipulates the DOM. */
class DocumentService {

    //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //
    constructor(
        @Inject(DOCUMENT) private readonly document: Document,
        private readonly metaSvc:  Meta,
        private readonly titleSvc: Title,
    ) {
        return this;
    }

    //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //
    public readonly description = {
        get: () => '', //TODO
        set: (description: string): void => {
            this.metaSvc.updateTag({name: 'description', content: description});
        },
    }

    //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //
    public readonly keywords = {
        get: () => {
            //TODO
        },
        set: (keywords: string[]): void => {
            //TODO
        },
    }

    //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //
    public readonly lang = {
        get: (): string => this.document.documentElement.lang,
        set: (lang: string): void => {
            this.document.documentElement.lang = lang;
        },
    }

    //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //
    public readonly title = {
        get: this.titleSvc.getTitle,
        set: this.titleSvc.setTitle,
    }
}
