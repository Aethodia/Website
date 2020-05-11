import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

//  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //
import {HttpOptions} from './http-options.class';
import {Utilities} from './utilities.class';

//  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //
export {EndpointSettings};

////////////////////////////////////////////////////////////////////////////////
class EndpointSettings {
    idempotent?: boolean = false;
}

////////////////////////////////////////////////////////////////////////////////
export class Endpoint<SendResponse, ReceiveResponse, RequestBody> {
    //TODO: Implement caching
    //TODO: Implement mock data

    //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //
    /** Construct an Enpoint.
     * @param http Angular's HttpClient
     * @param url The URL for the endpoint this Endpoint will hit.
     * @param [options] Default HTTP request options.
     * @param [options] Default Endpoint options.
     */
    constructor(
        private readonly http: HttpClient,
        private readonly url: string,
        private readonly options: HttpOptions = new HttpOptions(),
        private readonly settings: EndpointSettings = new EndpointSettings(),
    ) {
        // Clean up hte URL
        this.url = this.url.replace(/\/{2,}/, '/'); // Deduplicate redundant slashes
        this.url = this.url.replace(/^\//, '').replace(/\/$/, ''); // Strip leading and trailing slashes.

        // Ensure that the HttpOptions they are passing in have been properly instantiated.
        this.options = Utilities.transferProperties<HttpOptions>(this.options, new HttpOptions());

        // Done.
        return this;
    }

    //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //
    private mergeOptions(options: HttpOptions): HttpOptions {
        return Utilities.transferProperties<HttpOptions>(this.options, options);
    }

    //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //
    /** If `body` is `null`, sends a DELETE request to the endpoint.
     *  Else if `Endpoint` is not idempotent, sends a POST request.
     *  Else sends a PUT request.
     * @param body The data to send to the endpoint.
     * @param [options] Request options — overrides the defaults for this `Endpoint`.
     * @returns a response from the endpoint.
     */
    public send(body: RequestBody|null, options: HttpOptions = {}): Observable<SendResponse>|never {
        if(body === undefined) throw new ReferenceError('`body` is not defined!');
        options = this.mergeOptions(options);
        if(body === null) return this.http.delete<SendResponse>(this.url, options);
        return this.http[!this.settings.idempotent ? 'post' : 'put']<SendResponse>(this.url, body, options);
    }

    //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //
    /** Sends a GET request to the endpoint.
     * @param [options] Request options — overrides the defaults for this `Endpoint`.
     * @returns a response from the endpoint.
     */
    public receive(options: HttpOptions = {}): Observable<ReceiveResponse> {
        return this.http.get<ReceiveResponse>(this.url, this.mergeOptions(options));
    }
}
