import {enableProdMode} from '@angular/core';
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';

//  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //
import {environment} from './env/env';
import {AppModule} from './app/app.module';

////////////////////////////////////////////////////////////////////////////////
class Index {

    //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //
    constructor() {
        if(environment.prodMode) {
            enableProdMode();
        }
    }

    //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //
    public readonly start = async(): Promise<void> => {
        try {
            await platformBrowserDynamic().bootstrapModule(AppModule)
        } catch(error) {
            console.error(error);
        }
    };
}

////////////////////////////////////////////////////////////////////////////////
export {Index}
(new Index()).start();
