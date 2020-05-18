//  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //
/** The schema for an i18n bundle. */
type I18nBundle = {
    [module in string]?: I18nModule
} & {
    /** Translations stored here will be available across the entire module. */
    SHARED?: I18nModule;
};

//  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //
/** The schema for a module in an i18n bundle. */
type I18nModule = {
    [key in string]?: I18nKey;
};

//  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //
/** The schema for an i18n key. */
type I18nKey = {
    [lang in string]?: string;
} & {
    /** English is required. */
    en: string;
};
