import {Injectable} from '@angular/core';
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Observable} from 'rxjs';

//  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //
export {CacheInterceptor};

////////////////////////////////////////////////////////////////////////////////
@Injectable()
class CacheInterceptor implements HttpInterceptor {
    intercept(
        request: HttpRequest<unknown>,
        next: HttpHandler,
    ): Observable<HttpEvent<unknown>> {
        return next.handle(request); //TODO
    }
}
