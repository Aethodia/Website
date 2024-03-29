import type {I18nBundle} from 'app/core/types/i18n.type';
export const AUTH_I18N = {
    META_TITLE: {
        en: `Authentication - Aethodia, the Technocratic Republic`,
    },
    META_DESCRIPTION: {
        en: `The official website of the Technocratic Republic of Aethodia`,
    },
    META_KEYWORDS: {
        en: `Aethodia micronation technocracy`,
    },
    LOGIN_HEADER: {
        en: `Login`,
        'art-X': `lɔ́-kix`,
    },
};
export default AUTH_I18N as I18nBundle; // This is a hack that ensures our bundle is the correct type without losing strictness.
