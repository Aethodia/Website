import {Injectable} from '@angular/core';

//  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //
import {BackendService, EndpointType} from 'app/framework/services/backend.service';
import {Keyring} from 'app/framework/misc/keyring';

////////////////////////////////////////////////////////////////////////////////
@Injectable()
/** Contains a Keyring of endpoints that can be hit. */
class EndpointsService extends Keyring<EndpointType<any>> {

    //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //
    public readonly test: EndpointType<string>;

    //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //
    constructor(backend: BackendService) {
        super();
        this.test = backend.newEndpoint<string>('test', 0, {responseType: 'text'});
        return this;
    }
}

////////////////////////////////////////////////////////////////////////////////
export {EndpointsService};
