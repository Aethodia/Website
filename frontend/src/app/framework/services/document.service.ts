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
        private readonly meta:  Meta,
        private readonly title: Title,
    ) {
        return this;
    }

    //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //
    public readonly set = {
        lang: (lang: string): void => {
            this.document.documentElement.lang = lang;
        },
        description: (description: string): void => {
            this.meta.updateTag({name: 'description', content: description});
        },
        title: this.title.setTitle,
    }

    //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //
    public readonly get = {
        lang: (): string => this.document.documentElement.lang,
        description: () => '', //TODO
        title: this.title.getTitle,
    }
}
