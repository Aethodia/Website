
import {Controller, Get} from '@nestjs/common';
export {GraphQlController};

////////////////////////////////////////////////////////////////////////////////
@Controller('api/v0/graphql')
class GraphQlController {

    //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //
    @Get()
    get(): unknown {
        return {
            message: 'This is a test message from the server.'
        };
    }
}
