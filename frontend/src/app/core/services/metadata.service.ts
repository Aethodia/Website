import {Injectable, Inject} from '@angular/core';
import {DOCUMENT} from '@angular/common';
import {Title, Meta} from '@angular/platform-browser';

//  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //
import {I18nPipe} from '../pipes/i18n.pipe';
import {TextDirectionEnum, TextDirectionTuple, Utils} from '../utils/utils';

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
    /**  */
    public readonly direction = {
        /** Gets the current text flow axes. */
        get: (): Partial<TextDirectionTuple> => {
            let direction: Partial<TextDirectionTuple> = [undefined, undefined, undefined];
            this.body.classList.forEach((cssClass: string): void => {
                for(const axis of [TextDirectionEnum.ltr, TextDirectionEnum.rtl] as [TextDirectionEnum.ltr, TextDirectionEnum.rtl]) {
                    if(cssClass === axis) direction[0] = axis;
                }
                for(const axis of [TextDirectionEnum.ttb, TextDirectionEnum.btt] as [TextDirectionEnum.ttb, TextDirectionEnum.btt]) {
                    if(cssClass === axis) direction[1] = axis;
                }
                for(const axis of [TextDirectionEnum.hor, TextDirectionEnum.ver] as [TextDirectionEnum.hor, TextDirectionEnum.ver]) {
                    if(cssClass === axis) direction[2] = axis;
                }
            });
            return direction;
        },
        /** Sets CSS classes on the `body` element to control how text flows. */
        set: (tuple: TextDirectionTuple): void => {
            // Remove old directions
            for(const oldClass of Reflect.ownKeys(TextDirectionEnum) as Array<keyof typeof TextDirectionEnum>) {
                this.body.classList.remove(oldClass);
            }
            // Add new directions
            for(const axis of tuple) {
                this.body.classList.add(axis);
            }
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
