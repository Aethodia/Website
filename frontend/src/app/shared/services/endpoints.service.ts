import {Injectable} from '@angular/core';
import {BackendService, Endpoint} from 'app/framework/framework.module';
export {EndpointsService};

////////////////////////////////////////////////////////////////////////////////
@Injectable()
/** Contains a HashMap of endpoints that can be hit. */
class EndpointsService /*extends Table<Endpoint<unknown, unknown, unknown>>*/ { //FIXME: This `extends` *should* work...

    //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //
    public readonly graphql: Endpoint<object,  object, object>;
    public readonly test:    Endpoint<unknown, string, undefined>;

    //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //
    constructor(backend: BackendService) {
        //super();
        this.graphql = backend.newEndpoint('grarphql', 0, {responseType: 'json'});
        this.test    = backend.newEndpoint('test',     0, {responseType: 'text'});
        return this;
    }
}
