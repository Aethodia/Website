import {Injectable} from '@angular/core';
import {AppBackendService, EndpointType} from 'app/meta/services/backend.service';

////////////////////////////////////////////////////////////////////////////////
@Injectable()
/** Contains a keyring of endpoints that can be hit. */
class AppRestService {

    public readonly endpoints: {[endpoint: string]: EndpointType<any>};

    //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //
    constructor(
        private readonly backend: AppBackendService,
    ) {
        this.endpoints = {
            test: this.backend.new<boolean>('test', 0),
        }
        return this;
    }
}

////////////////////////////////////////////////////////////////////////////////
export {AppRestService};
