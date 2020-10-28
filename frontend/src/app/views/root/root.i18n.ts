import {Utils} from 'app/core/utils/utils';
import {I18nBundle} from 'app/core/types/i18n.type';
export {ROOT_I18N}

////////////////////////////////////////////////////////////////////////////////
const ROOT_I18N = {
    ACCOUNT_NAV_BUTTON: {
        en: `Account`,
    },
    FORMS_NAV_BUTTON: {
        en: `Forms`,
    },
    HOME_NAV_BUTTON: {
        en: `Theodia`,
    },
    LOGIN_NAV_BUTTON: {
        en: `Log in`,
    },
    SERVICES_NAV_BUTTON: {
        en: `Services`,
    },
    COPYRIGHT_NOTICE: {
        en: Utils.md2html(`Copyright ©:  per [CC-BY-SA 4](https://creativecommons.org/licenses/by-sa/4.0);  from 2018-2020;  by Miles B Huff;  on behalf of the Technocratic Republic of Theodia.`),
    },
};
export default ROOT_I18N as I18nBundle; // This is a hack that ensures our bundle is the correct type without losing strictness.
