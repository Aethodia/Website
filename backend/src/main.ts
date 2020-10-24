import {NestFactory} from '@nestjs/core';
import {FastifyAdapter, NestFastifyApplication} from '@nestjs/platform-fastify';

//  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //
import {AppModule} from './app/app.module';

////////////////////////////////////////////////////////////////////////////////
export default (async(): Promise<void> => {
    try {
        const app: NestFastifyApplication = (
            await NestFactory.create<NestFastifyApplication>(
                AppModule,
                new FastifyAdapter(),
            )
        );
        await app.listen(3000);

    } catch(error) {
        console.error(error);
    }
})().catch(console.error);
