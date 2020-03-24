import {Injectable} from '@angular/core';
import {BackendService, Endpoint} from 'app/framework/framework.module';

////////////////////////////////////////////////////////////////////////////////
@Injectable()
/** Contains a HashMap of endpoints that can be hit. */
class EndpointsService extends Table<Endpoint<any, any, any>> {

    //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //
    public readonly test: Endpoint<unknown, string, undefined>;

    //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //
    constructor(backend: BackendService) {
        super();
        this.test = backend.newEndpoint('test', 0, {responseType: 'text'});
        return this;
    }
}

////////////////////////////////////////////////////////////////////////////////
export {EndpointsService};
