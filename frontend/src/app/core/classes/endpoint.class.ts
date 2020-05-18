import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

//  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //
import {HttpOptions} from './http-options.class';
import {Utils} from '../utils/utils';

//  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //
export {
    Endpoint,
    EndpointSettings,
};

////////////////////////////////////////////////////////////////////////////////
class EndpointSettings {
    idempotent?: boolean = false;
    partial?: boolean = false;
    test?: boolean = false;
}

////////////////////////////////////////////////////////////////////////////////
class Endpoint<SendResponse, ReceiveResponse, RequestBody> {

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
        this.options = Utils.transferProperties<HttpOptions>(this.options, new HttpOptions());

        // Done.
        return this;
    }

    //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //
    private mergeOptions(options: HttpOptions): HttpOptions {
        return Utils.transferProperties<HttpOptions>(this.options, options);
    }

    //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //
    /**       If `Endpoint` is in `test`-mode, sends a HEAD request;
     *  else, if `body` is `null`, sends a DELETE request;
     *  else, if `Endpoint` accepts partial responses, sends a PATCH request.
     *  else, if `Endpoint` is idempotent, sends a PUT request;
     *  else, sends a POST request.
     * @param body The data to send to the endpoint.
     * @param [options] Request options — overrides the defaults for this `Endpoint`.
     * @returns a response from the endpoint.
     */
    public send(body: RequestBody|null, options: HttpOptions = {}): Observable<SendResponse>|never {

        // Validate and merge function input
        if(body === undefined) throw new ReferenceError('`body` is not defined!');
        options = this.mergeOptions(options);

        // If this is a test, send HEAD.
        if(this.settings.test) return this.http.head<SendResponse>(this.url, options);

        // If the body is `null`, send a DELETE request.
        if(body === null) return this.http.delete<SendResponse>(this.url, options);

        // If we have a body to send, figure out how to send it.
        let method: keyof HttpClient        = 'post';
        if(this.settings.idempotent) method = 'put';
        if(this.settings.partial)    method = 'patch';
        return this.http[method]<SendResponse>(this.url, body, options);
    }

    //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //
    /** Sends a GET request to the endpoint,
     *  or a HEAD request if `test` mode is enabled.
     * @param [options] Request options — overrides the defaults for this `Endpoint`.
     * @returns a response from the endpoint.
     */
    public receive(options: HttpOptions = {}): Observable<ReceiveResponse> {

        // Figure out what kind of request to make
        let method: keyof HttpClient  = 'get';
        if(this.settings.test) method = 'head';
        return this.http[method]<ReceiveResponse>(this.url, this.mergeOptions(options));
    }
}
