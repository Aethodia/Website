import {Injectable} from '@angular/core';

//  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //
import {AppBackendService, EndpointType} from 'app/meta/services/backend.service';
import {Keyring} from '../../meta/misc/keyring';

////////////////////////////////////////////////////////////////////////////////
@Injectable()
/** Contains a Keyring of endpoints that can be hit.
 * @alias endSvc
*/
class AppEndpointService extends Keyring<EndpointType<any>> {

    //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //
    public readonly test: EndpointType<string>;

    //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //
    constructor(backend: AppBackendService) {
        super();
        this.test = backend.new<string>('test', 0, {responseType: 'text'});
        return this;
    }
}

////////////////////////////////////////////////////////////////////////////////
export {AppEndpointService};
