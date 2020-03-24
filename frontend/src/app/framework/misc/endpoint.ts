import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

//  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //
import {HttpOptions} from '../misc/http-options';
import {Utilities} from '../misc/utilities';

////////////////////////////////////////////////////////////////////////////////
interface EndpointSettings {
    idempotent: boolean;
}

////////////////////////////////////////////////////////////////////////////////
class Endpoint<SendType, ReceiveType, BodyType> {
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
        private readonly settings: EndpointSettings,
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
    /** Sends a PUT or POST request to the endpoint,
     *  depending on whether `Endpoint` is configured to be idempotent.
     *  If `body` is `null` or `undefined`, sends a DELETE request to the endpoint.
     * @param body The data to send to the endpoint.
     * @param [options] Request options — overrides the defaults for this `Endpoint`.
     * @returns a response from the endpoint.
     */
    public readonly send = (body: BodyType, options?: HttpOptions): Observable<SendType> => {
        options = this.mergeOptions(options);
        if(body == null) return this.http.delete<SendType>(this.url, options);
        return this.http[this.settings.idempotent ? 'put' : 'post']<SendType>(this.url, body, options);
    }

    //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //
    /** Sends a GET request to the endpoint.
     * @param [options] Request options — overrides the defaults for this `Endpoint`.
     * @returns a response from the endpoint.
     */
    public readonly receive = (options?: HttpOptions): Observable<ReceiveType> => {
        return this.http.get<ReceiveType>(this.url, this.mergeOptions(options));
    }
}

////////////////////////////////////////////////////////////////////////////////
export {Endpoint};
