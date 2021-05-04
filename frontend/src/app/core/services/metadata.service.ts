import {Injectable, Inject} from '@angular/core';
import {DOCUMENT} from '@angular/common';
import {Title, Meta} from '@angular/platform-browser';

//  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //
import {I18nPipe} from '../pipes/i18n.pipe';
import {TextFlowTuple, Utils} from '../utils/utils';

//  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //
export {MetadataService};

////////////////////////////////////////////////////////////////////////////////
@Injectable()
/** Manipulates the Document's metadata. */
class MetadataService {
    private readonly html: HTMLHtmlElement = this.document.getElementsByTagName('html')[0];

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
        get: (): Partial<TextFlowTuple> => {
            let direction: Partial<TextFlowTuple> = [undefined, undefined, undefined];
            this.html.classList.forEach((cssClass: string): void => {
                for(const axis of [Utils.textFlowEnum.ltr, Utils.textFlowEnum.rtl] as [typeof Utils.textFlowEnum.ltr, typeof Utils.textFlowEnum.rtl]) {
                    if(cssClass === axis) direction[0] = axis;
                }
                for(const axis of [Utils.textFlowEnum.ttb, Utils.textFlowEnum.btt] as [typeof Utils.textFlowEnum.ttb, typeof Utils.textFlowEnum.btt]) {
                    if(cssClass === axis) direction[1] = axis;
                }
                for(const axis of [Utils.textFlowEnum.hor, Utils.textFlowEnum.ver] as [typeof Utils.textFlowEnum.hor, typeof Utils.textFlowEnum.ver]) {
                    if(cssClass === axis) direction[2] = axis;
                }
            });
            return direction;
        },
        /** Sets CSS classes on the `html` element to control how text flows. */
        set: (tuple: TextFlowTuple): void => {
            // Remove old directions
            for(const oldClass of Reflect.ownKeys(Utils.textFlowEnum) as Array<keyof typeof Utils.textFlowEnum>) {
                this.html.classList.remove(oldClass);
            }
            // Add new directions
            for(const axis of tuple) {
                this.html.classList.add(axis);
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
            this.direction.set(Utils.getTextFlow(lang));
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
