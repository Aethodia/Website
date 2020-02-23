import {enableProdMode} from '@angular/core';
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';

//  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //
import {environment} from './env/env';
import {AppModule} from './app/app.module';

////////////////////////////////////////////////////////////////////////////////
if(environment.prodMode) {
    enableProdMode();
}

//  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //
(async(): Promise<void> => {
    try {
        await platformBrowserDynamic().bootstrapModule(AppModule);

    } catch(error) {
        console.error(error);
    }
})();
