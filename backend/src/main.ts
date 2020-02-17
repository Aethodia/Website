import {NestFactory} from '@nestjs/core';
import {AppModule} from './app/app.module';

////////////////////////////////////////////////////////////////////////////////
const bootstrap = async(): Promise<void> => {
  const app = await NestFactory.create(AppModule);
  await app.listen(3000);
}
bootstrap();
