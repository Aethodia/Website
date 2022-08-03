import type {I18nBundle} from 'app/core/types/i18n.type';
export {ROOT_I18N}
const ROOT_I18N = {
    ACCOUNT_NAV_BUTTON: {
        en: `Account`,
    },
    FORMS_NAV_BUTTON: {
        en: `Forms`,
    },
    HOME_NAV_BUTTON: {
        en: `Aethodia`,
    },
    LOGIN_NAV_BUTTON: {
        en: `Log in`,
    },
    SERVICES_NAV_BUTTON: {
        en: `Services`,
    },
    COPYRIGHT_NOTICE: {
        en: `Copyright ©:  per <a href="https://creativecommons.org/licenses/by-sa/4.0">CC-BY-SA 4</a>;  from 2018-2021;  by Miles B Huff;  on behalf of the Technocratic Republic of Aethodia.`,
    },
};
export default ROOT_I18N as I18nBundle; // This is a hack that ensures our bundle is the correct type without losing strictness.
