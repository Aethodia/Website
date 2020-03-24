import {Injectable} from '@angular/core';
import {BackendService, Endpoint} from 'app/framework/framework.module';

////////////////////////////////////////////////////////////////////////////////
@Injectable()
/** Contains a HashMap of endpoints that can be hit. */
class EndpointsService extends Table<Endpoint<unknown>> {

    //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //
    public readonly test = this.backend.newEndpoint<unknown, string, undefined>('test', 0, {responseType: 'text'});;

    //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //
    constructor(private readonly backend: BackendService) {
        super();
        return this;
    }
}

////////////////////////////////////////////////////////////////////////////////
export {EndpointsService};
