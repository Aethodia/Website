import {Injectable} from '@angular/core';
import {BackendService, Endpoint} from 'app/framework/framework.module';
export {EndpointsService};

////////////////////////////////////////////////////////////////////////////////
@Injectable()
/** Contains a HashMap of endpoints that can be hit. */
class EndpointsService {

    //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //
    public readonly graphql: Endpoint<object,  object, object>;
    public readonly test:    Endpoint<unknown, string, undefined>;

    //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //
    constructor(backend: BackendService) {
        this.graphql = backend.newEndpoint('grarphql', 0, {responseType: 'json'});
        this.test    = backend.newEndpoint('test',     0, {responseType: 'text'});
        return this;
    }
}
