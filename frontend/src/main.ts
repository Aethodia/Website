////////////////////////////////////////////////////////////////////////////////
import {enableProdMode} from '@angular/core';
import {environment} from './env/env.const';
if(environment.prodMode) {
    enableProdMode();
}

////////////////////////////////////////////////////////////////////////////////
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import {AppModule} from './app/app.module';
export default platformBrowserDynamic()
    .bootstrapModule(AppModule)
    .catch(console.error);
