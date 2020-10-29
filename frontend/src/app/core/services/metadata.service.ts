import {Injectable, Inject} from '@angular/core';
import {DOCUMENT} from '@angular/common';
import {Title, Meta} from '@angular/platform-browser';

//  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //
import {I18nPipe} from '../pipes/i18n.pipe';
import {TextDirectionType, Utils} from '../utils/utils';

//  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //
export {MetadataService};

////////////////////////////////////////////////////////////////////////////////
@Injectable()
/** Manipulates the Document's metadata. */
class MetadataService {
    private readonly body: HTMLBodyElement = this.document.getElementsByTagName('body')[0];

    //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //
    constructor(
        @Inject(DOCUMENT) private readonly document: Document,
        private readonly metaSvc:  Meta,
        private readonly titleSvc: Title,
    ) {
        return this;
    }

    //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //
    public quickSet(i18n: I18nPipe): void {
        this.set({
            title: i18n.transform('META_TITLE'),
            description: i18n.transform('META_DESCRIPTION'),
            keywords: i18n.transform('META_KEYWORDS'),
        });
    }

    //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //
    public set(metadata: {
        description?: string,
        keywords?: string,
        lang?: string,
        title?: string,
    }): void {
        for(const key of Reflect.ownKeys(metadata) as Array<keyof typeof metadata>) {
            if(metadata[key] == null) continue;
            this[key].set(metadata[key]!);
        }
    }

    //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //
    public readonly description = {
        get: (): string => '', //TODO
        set: (description: string): void => {
            this.metaSvc.updateTag({name: 'description', content: description});
        },
    }

    //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //
    public readonly direction = {
        get: (): TextDirectionType|null => {
            let currentDirection: TextDirectionType|null = null;
            this.body.classList.forEach((cssClass: string): void => {
                for(const possibleDirection of Reflect.ownKeys(TextDirectionType) as Array<keyof typeof TextDirectionType>) {
                    if(cssClass === possibleDirection) {
                        currentDirection = TextDirectionType[possibleDirection];
                    }
                }
            });
            return currentDirection;
        },
        set: (direction: TextDirectionType): void => {
            for(const oldClass of Reflect.ownKeys(TextDirectionType) as Array<keyof typeof TextDirectionType>) {
                this.body.classList.remove(oldClass);
            }
            this.body.classList.add(direction);
        },
    }

    //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //
    public readonly keywords = {
        get: () => {
            //TODO
        },
        set: (keywords: string|string[]): void => {
            //TODO
        },
    }

    //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //
    public readonly lang = {
        get: (): string => this.document.documentElement.lang,
        set: (lang: string): void => {
            this.document.documentElement.lang = lang;
            this.direction.set(Utils.getTextDirection(lang));
        },
    }

    //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //
    public readonly robots = {
        get: () => {
            //TODO
        },
        set: (robots: string[]): void => {
            //TODO
        },
    }

    //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //
    public readonly title = {
        get: (): string => this.titleSvc.getTitle(),
        set: (title: string): void => this.titleSvc.setTitle(title),
    }
}
