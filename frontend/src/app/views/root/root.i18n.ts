import {I18nBundle} from 'app/core/types/i18n.type';
export const ROOT_I18N = {
    THEODIA: {
        en: `Theodia`,
    },
    LOGIN: {
        en: `Log in`,
    },
    COPYRIGHT: {
        en: `Copyright © from 2018-2020 by Miles B Huff, on behalf of the Technocratic Republic of Theodia.`,
    },
};
export default ROOT_I18N as I18nBundle; // This is a hack that ensures our bundle is the correct type without losing strictness.
