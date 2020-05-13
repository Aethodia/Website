import {Module} from '@nestjs/common';
import {GraphQlController} from './graphql.controller';
export {AppModule};

////////////////////////////////////////////////////////////////////////////////
@Module({
  imports: [],
  controllers: [GraphQlController],
  providers: [],
})
class AppModule {}
