import {Injectable} from '@angular/core';
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Observable, of} from 'rxjs';

//  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //
export {MockInterceptor};

////////////////////////////////////////////////////////////////////////////////
@Injectable()
class MockInterceptor implements HttpInterceptor {
    intercept(
        request: HttpRequest<unknown>,
        next: HttpHandler,
    ): Observable<HttpEvent<unknown>> {
        return of();
    }
}
