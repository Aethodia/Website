import {Injectable} from '@angular/core';
import {AppBackendService, Endpoint} from 'app/meta/services/backend.service';

////////////////////////////////////////////////////////////////////////////////
@Injectable()
/** Contains a keyring of endpoints that can be hit. */
class AppEndpointService {
    readonly [key: string]: Endpoint<any>;
    public readonly test: Endpoint<string>;

    //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //
    constructor(backend: AppBackendService) {
        this.test = backend.new<string>('test', 0, {responseType: 'text'});
        return this;
    }
}

////////////////////////////////////////////////////////////////////////////////
export {AppEndpointService};
