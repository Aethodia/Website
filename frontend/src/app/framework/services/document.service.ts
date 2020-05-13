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
    public set(metadata: {
        description?: string,
        keywords?: string[],
        lang?: string,
        title?: string,
    }): void {
        for(const key of Reflect.ownKeys(metadata) as Array<keyof typeof metadata>) {
            if(metadata[key] == null) continue;
            this[key].set(metadata[key] as any); //TODO: Make this type-safe.
        }
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
        get: (): string => this.titleSvc.getTitle(),
        set: (title: string): void => this.titleSvc.setTitle(title),
    }
}
