import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {HttpHeaders, HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs';

////////////////////////////////////////////////////////////////////////////////
/** HTTP request options. */
type httpOptions = {
    headers?: HttpHeaders;
    params?: HttpParams;
    responseType?: "json";
    observe?: "body";
    reportProgress?: boolean;
    withCredentials?: boolean;
};

////////////////////////////////////////////////////////////////////////////////
/** A class containing a standard set of Rest calls. */
interface EndpointType {
    get:    Function;
    post:   Function;
    put:    Function;
    delete: Function;
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
     * @param version The version of the endpoint to use.
     * @param url The URL for the endpoint this Endpoint will hit.
     * @param options HTTP request options.
     * @returns a new Endpoint.
     */
    public readonly new = <T>(
        version: number,
        url: string,
        options: httpOptions,
    ): EndpointType => {
        url = url.replace(/\/{2,}/, '/'); // Deduplicate redundant slashes
        url = url.replace(/^\//, '').replace(/\/$/, ''); // Strip leading and trailing slashes.
        return new this.Endpoint<T>(this.http, `v${version}/${url}`, options);
    }

    ////////////////////////////////////////////////////////////////////////////////
    /** A Request containing a standard set of Rest calls. */
    private readonly Endpoint = class<T> implements EndpointType {
        //TODO: Implement caching
        //TODO: Implement mock data

        //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //
        constructor(
            private readonly http: HttpClient,
            /** The URL for the endpoint this Endpoint will hit. */
            private readonly url: string,
            /** HTTP request options. */
            private readonly options: httpOptions
        ) {}

        //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //
        /** Sends a GET request to the endpoint.
         * @returns a response from the endpoint.
         */
        public readonly get = <T>(): Observable<T> => {
            return this.http.get<T>(this.url, this.options);
        }

        //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //
        /** Sends a POST request to the endpoint.
         * @param payload The payload for the request.
         * @returns a response from the endpoint.
         */
        public readonly post = <T>(payload: T): Observable<T> => {
            return this.http.post<T>(this.url, payload, this.options);
        }

        //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //
        /** Sends a PUT request to the endpoint.
         * @param payload The payload for the request.
         * @returns a response from the endpoint.
         */
        public readonly put = <T>(payload: T): Observable<T> => {
            return this.http.put<T>(this.url, payload, this.options);
        }

        //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //
        /** Sends a DELETE request to the endpoint.
         * @returns a response from the endpoint.
         */
        public readonly delete = <T>(): Observable<T> => {
            return this.http.delete<T>(this.url, this.options);
        }
    }
}

////////////////////////////////////////////////////////////////////////////////
export {AppBackendService, EndpointType, httpOptions};
