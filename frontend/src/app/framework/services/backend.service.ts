import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

//  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //
import {HttpOptions} from '../misc/http-options';
import {Utilities} from '../misc/utilities';

////////////////////////////////////////////////////////////////////////////////
/** A class containing a standard set of Rest calls. */
interface EndpointType<T> {

    //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //
    /** Sends a GET request to the endpoint.
     * @returns a response from the endpoint.
     */
    get: () => Observable<T>;

    //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //
    /** Sends a POST request to the endpoint.
     * @param payload The payload for the request.
     * @returns a response from the endpoint.
     */
    post: (payload: T) => Observable<T>;

    //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //
    /** Sends a PUT request to the endpoint.
     * @param payload The payload for the request.
     * @returns a response from the endpoint.
     */
    put: (payload: T) => Observable<T>;

    //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //
    /** Sends a DELETE request to the endpoint.
     * @returns a response from the endpoint.
     */
    delete: () => Observable<T>;
}

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
    public readonly newEndpoint = <T>(
        url: string,
        version: number,
        options?: HttpOptions,
    ): EndpointType<T> => {
        url = url.replace(/\/{2,}/, '/'); // Deduplicate redundant slashes
        url = url.replace(/^\//, '').replace(/\/$/, ''); // Strip leading and trailing slashes.
        return new this.Endpoint<T>(this.http, `api/v${version}/${url}`, options);
    }

    ////////////////////////////////////////////////////////////////////////////////
    private readonly Endpoint = class<T> implements EndpointType<T> {
        //TODO: Implement caching
        //TODO: Implement mock data

        //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //
        /** Construct an Enpoint.
         * @param http Angular's HttpClient
         * @param url The URL for the endpoint this Endpoint will hit.
         * @param [options] Default HTTP request options.
         */
        constructor(
            private readonly http: HttpClient,
            private readonly url: string,
            private readonly options: HttpOptions = new HttpOptions(),
        ) {
            // Ensure that the HttpOptions they are passing in have been properly instantiated.
            this.options = Utilities.transferProperties<HttpOptions>(new HttpOptions(), this.options);
            return this;
        }

        //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //
        private readonly mergeOptions = (options?: HttpOptions): HttpOptions => {
            if(options != null) {
                return Utilities.transferProperties<HttpOptions>(options, this.options);
            }
            return this.options;
        }

        //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //
        /** Sends a GET request to the endpoint.
         * @param [options] Request options — overrides the defaults for this Endpoint.
         * @returns a response from the endpoint.
         */
        public readonly get = (options?: HttpOptions): Observable<T> => {
            return this.http.get<T>(this.url, this.mergeOptions(options));
        }

        //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //
        /** Sends a GET request to the endpoint.
         * @param payload The data to send to the endpoint.
         * @param [options] Request options — overrides the defaults for this Endpoint.
         * @returns a response from the endpoint.
         */
        public readonly post = (payload: T, options?: HttpOptions): Observable<T> => {
            return this.http.post<T>(this.url, payload, this.mergeOptions(options));
        }

        //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //
        /** Sends a GET request to the endpoint.
         * @param payload The data to send to the endpoint.
         * @param [options] Request options — overrides the defaults for this Endpoint.
         * @returns a response from the endpoint.
         */
        public readonly put = (payload: T, options?: HttpOptions): Observable<T> => {
            return this.http.put<T>(this.url, payload, this.mergeOptions(options));
        }

        //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //
        /** Sends a GET request to the endpoint.
         * @param [options] Request options — overrides the defaults for this Endpoint.
         * @returns a response from the endpoint.
         */
        public readonly delete = (options?: HttpOptions): Observable<T> => {
            return this.http.delete<T>(this.url, this.mergeOptions(options));
        }
    }
}

////////////////////////////////////////////////////////////////////////////////
export {BackendService, EndpointType, HttpOptions};
