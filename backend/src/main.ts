import {NestFactory} from '@nestjs/core';

//  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //
import {AppModule} from './app/app.module';

////////////////////////////////////////////////////////////////////////////////
(async(): Promise<void> => {
    try {
        const app = await NestFactory.create(AppModule);
        await app.listen(3000);

    } catch(error) {
        console.error(error);
    }
})();
