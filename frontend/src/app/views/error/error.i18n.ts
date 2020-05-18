export const ERROR_I18N = {
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
export default ERROR_I18N as I18nBundle; // This is a hack that ensures our bundle is the correct type.
