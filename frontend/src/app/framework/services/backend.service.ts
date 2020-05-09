import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

//  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //
import {Endpoint} from '../misc/endpoint';
import {HttpOptions} from '../misc/http-options';

//  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //
export {BackendService};

////////////////////////////////////////////////////////////////////////////////
@Injectable()
/** Handles all calls to the backend, and provides the option to cache them. */
class BackendService {

    //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //
    constructor(
        private readonly http: HttpClient,
    ) {
        return this;
    }

    //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //
    /** Create a new Endpoint that can makes various HTTP requests.
     * @param url The URL for the endpoint this Endpoint will hit.
     * @param version The version of the endpoint to use.
     * @param options HTTP request options.
     * @returns a new Endpoint.
     */
    public readonly newEndpoint = <SendType, ReceiveType, BodyType>(
        url: string,
        version: number,
        options?: HttpOptions,
    ) => new Endpoint<SendType, ReceiveType, BodyType>(this.http, `api/v${version}/${url}`, options);
}
