import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

//  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //
import {HttpOptions} from '../misc/http-options';
import {Utilities} from '../misc/utilities';

////////////////////////////////////////////////////////////////////////////////
class Endpoint<T> {
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
        // Clean up hte URL
        this.url = this.url.replace(/\/{2,}/, '/'); // Deduplicate redundant slashes
        this.url = this.url.replace(/^\//, '').replace(/\/$/, ''); // Strip leading and trailing slashes.

        // Ensure that the HttpOptions they are passing in have been properly instantiated.
        this.options = Utilities.transferProperties<HttpOptions>(new HttpOptions(), this.options);

        // Done.
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

////////////////////////////////////////////////////////////////////////////////
export {Endpoint};
