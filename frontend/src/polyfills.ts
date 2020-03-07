import {environment} from './env/env';

////////////////////////////////////////////////////////////////////////////////
// This file contains side-effects required for the application to work correctly.

// Browser-specific
//  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //
// import 'classlist.js';      // Required for NgClass support on SVG elements in IE
// import 'web-animations-js'; // Required to support Safari/Edge/IE when using AnimationBuilder

// Framework-required
//  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //
(globalThis as Table<any>).__Zone_enable_cross_context_check = true;
import 'zone.js/dist/zone';
if(!environment.prodMode) {
    require('zone.js/dist/zone-error');
}

// Custom
//  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //
