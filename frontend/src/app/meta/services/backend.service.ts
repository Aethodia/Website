import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {HttpHeaders, HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs';

////////////////////////////////////////////////////////////////////////////////
/** HTTP request options. */
type httpOptions = {
    headers?: HttpHeaders;
    params?: HttpParams;
    responseType?: string|any; //BUG: Angular seems to have typed this incorrectly;  adding `any` type as a work-around.
    observe?: string|any;      //BUG: Angular seems to have typed this incorrectly;  adding `any` type as a work-around.
    reportProgress?: boolean;
    withCredentials?: boolean;
};

////////////////////////////////////////////////////////////////////////////////
/** A class containing a standard set of Rest calls. */
interface Endpoint<T> {

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
class AppBackendService {

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
    public readonly new = <T>(
        url: string,
        version: number,
        options?: httpOptions,
    ): Endpoint<T> => {
        url = url.replace(/\/{2,}/, '/'); // Deduplicate redundant slashes
        url = url.replace(/^\//, '').replace(/\/$/, ''); // Strip leading and trailing slashes.
        return new this._Endpoint<T>(this.http, `api/v${version}/${url}`, options);
    }

    ////////////////////////////////////////////////////////////////////////////////
    private readonly _Endpoint = class<T> implements Endpoint<T> {
        //TODO: Implement caching
        //TODO: Implement mock data

        //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //
        /** Construct an Enpoint.
         * @param url The URL for the endpoint this Endpoint will hit.
         * @param [options] HTTP request options.
         */
        constructor(
            private readonly http: HttpClient,
            private readonly url: string,
            private readonly options?: httpOptions
        ) {
            return this;
        }

        //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //
        public readonly get = (): Observable<T> => {
            return this.http.get<T>(this.url, this.options);
        }
        public readonly post = (payload: T): Observable<T> => {
            return this.http.post<T>(this.url, payload, this.options);
        }
        public readonly put = (payload: T): Observable<T> => {
            return this.http.put<T>(this.url, payload, this.options);
        }
        public readonly delete = (): Observable<T> => {
            return this.http.delete<T>(this.url, this.options);
        }
    }
}

////////////////////////////////////////////////////////////////////////////////
export {AppBackendService, Endpoint, httpOptions};
