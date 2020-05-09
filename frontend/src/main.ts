////////////////////////////////////////////////////////////////////////////////
import {enableProdMode} from '@angular/core';
import {environment} from './env/env';
if(environment.prodMode) {
    enableProdMode();
}

////////////////////////////////////////////////////////////////////////////////
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import {AppModule} from './app/app.module';
platformBrowserDynamic()
    .bootstrapModule(AppModule)
    .catch(error => console.error(error));
