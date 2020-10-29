import capsEnum from './misc/caps.enum';

//  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //
import changeCaps from './functions/change-caps.function';
import checkAlphanumericity from './functions/check-alphanumericity.function';
import forEach from './functions/for-each.function';
import formatLocale from './functions/format-locale.function';
import getTextDirection, {TextDirectionType} from './functions/get-text-direction.function';
import reinitType from './functions/reinit-type.function';
import transferProperties from './functions/transfer-properties.function';

//  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //
export {
    Utils,
    TextDirectionType,
};

////////////////////////////////////////////////////////////////////////////////
/** General reusable utility code. */
const Utils = {

    // Other
    capsEnum,

    // Functions
    changeCaps,
    checkAlphanumericity,
    forEach,
    formatLocale,
    getTextDirection,
    reinitType,
    transferProperties,
};
