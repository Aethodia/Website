import type {I18nBundle} from 'app/core/types/i18n.type';
export const ERROR_I18N = {
    META_TITLE: {
        en: `Error - Aethodia, the Technocratic Republic`,
    },
    META_DESCRIPTION: {
        en: `The official website of the Technocratic Republic of Aethodia`,
    },
    META_KEYWORDS: {
        en: `Aethodia micronation technocracy error`,
    },
    NaN: {
        en: 'An unknown error has occurred.',
    },
    401: {
        en: 'Error 401: Unauthorized.',
    },
    403: {
        en: 'Error 403: Forbidden.',
    },
    404: {
        en: 'Error 404: Not found.',
    },
};
export default ERROR_I18N as I18nBundle; // This is a hack that ensures our bundle is the correct type without losing strictness.
