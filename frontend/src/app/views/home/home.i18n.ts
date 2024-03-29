import {LOREM_IPSUM} from 'app/core/consts/lorem-ipsum.const';
import type {I18nBundle} from 'app/core/types/i18n.type';
export const HOME_I18N = {
    META_TITLE: {
        en: `Aethodia, the Technocratic Republic`,
    },
    META_DESCRIPTION: {
        en: `The official website of the Technocratic Republic of Aethodia`,
    },
    META_KEYWORDS: {
        en: `Aethodia micronation technocracy`,
    },
    INTRO_HEADER: {
        en: `Welcome!`,
    },
    INTRO_BODY: {
        en: LOREM_IPSUM,
    },
};
export default HOME_I18N as I18nBundle; // This is a hack that ensures our bundle is the correct type without losing strictness.
