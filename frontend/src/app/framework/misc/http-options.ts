import {HttpHeaders, HttpParams} from '@angular/common/http';

//  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //
import {Utilities} from './utilities';

////////////////////////////////////////////////////////////////////////////////
/** HTTP request options.
 * @note This should be included in upstream Angular...
 */
class HttpOptions extends Object {

    //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //
    public headers?: HttpHeaders;
    public params?: HttpParams;
    public responseType?: string|any; //BUG: Angular seems to have typed this incorrectly;  adding `any` type as a work-around.
    public observe?: string|any;      //BUG: Angular seems to have typed this incorrectly;  adding `any` type as a work-around.
    public reportProgress?: boolean;
    public withCredentials?: boolean;

    //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //
    constructor(input?: HttpOptions|Table<any>) {
        super();

        // We want this class to match ad-hoc objects, so we need to make its custom member functions optional.
        if(this.initialize != null) {
            this.initialize();

            if(this.build != null
            && input != null
            ) {
                this.build(input);
            }
        }
        return this;
    }

    //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //
    /** Initializes class variables */
    private readonly initialize? = (): void => {
        this.headers = new HttpHeaders();
        this.params  = new HttpParams();
        this.responseType = undefined; //TODO
        this.observe = undefined; //TODO
        this.reportProgress = undefined; //TODO
        this.withCredentials = undefined; //TODO
    }

    //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //
    /** Populates the class with user input. */
    private readonly build? = (input: HttpOptions|Table<any>): void => {
        const merged = Utilities.transferProperties<HttpOptions>(input, this);
        for(const key of Object.keys(merged)) {
            //@ts-ignore: We don't need to care what the index type is here.
            this[key] = merged[key];
        }
    }
};

////////////////////////////////////////////////////////////////////////////////
export {HttpOptions};

new HttpOptions({});
