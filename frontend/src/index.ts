import {enableProdMode} from '@angular/core';
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';

//  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //
import {environment} from './env/env';
import {AppModule} from './app/app.module';

////////////////////////////////////////////////////////////////////////////////
const index = async(): Promise<void> => {

    if(environment.production) {
        enableProdMode();
    }

    try {
        await platformBrowserDynamic().bootstrapModule(AppModule)
    } catch(error) {
        console.error(error);
    }
};

////////////////////////////////////////////////////////////////////////////////
export {index}
index();
