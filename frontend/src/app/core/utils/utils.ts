import capsEnum from './misc/caps.enum';

//  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //
import changeCaps from './functions/change-caps.function';
import checkAlphanumericity from './functions/check-alphanumericity.function';
import forEach from './functions/for-each.function';
import formatLocale from './functions/format-locale.function';
import getTextFlow, {textFlowEnum, TextFlowTuple} from './functions/get-text-direction.function';
import reinitType from './functions/reinit-type.function';
import transferProperties from './functions/transfer-properties.function';

//  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //
export {
    Utils,
    TextFlowTuple,
};

////////////////////////////////////////////////////////////////////////////////
/** General reusable utility code. */
const Utils = {

    // Other
    capsEnum,
    textFlowEnum,

    // Functions
    changeCaps,
    checkAlphanumericity,
    forEach,
    formatLocale,
    getTextFlow,
    reinitType,
    transferProperties,
};
