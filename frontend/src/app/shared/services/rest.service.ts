import {Injectable} from '@angular/core';
import {AppBackendService, Endpoint} from 'app/meta/services/backend.service';

////////////////////////////////////////////////////////////////////////////////
@Injectable()
/** Contains a keyring of endpoints that can be hit. */
class AppRestService {

    //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //
    constructor(
        private readonly backend: AppBackendService,
    ) {
        return this;
    }

    //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //
    public readonly endpoints: {
        test: Endpoint<string>,
    } = {
        test: this.backend.new<string>('test', 0, {responseType: 'text'}),
    };
}

////////////////////////////////////////////////////////////////////////////////
export {AppRestService};
