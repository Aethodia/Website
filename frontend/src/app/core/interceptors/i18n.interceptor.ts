import {Injectable} from '@angular/core';
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Observable} from 'rxjs';

//  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //
import {EnvironmentService} from '../services/environment.service';
export {I18nInterceptor};

////////////////////////////////////////////////////////////////////////////////
@Injectable()
class I18nInterceptor implements HttpInterceptor {

    //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //
    constructor(
        private readonly envSvc: EnvironmentService,
    ) {
        return this;
    }

    //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //
    intercept(
        request: HttpRequest<unknown>,
        next: HttpHandler,
    ): Observable<HttpEvent<unknown>> {
        const lang = this.envSvc.vars.language.get().value;
        if(lang != null) {
            request.headers.set('Accept-Language', lang);
            if(request.body != null) {
                request.headers.set('Content-Language', lang);
            }
        }
        return next.handle(request);
    }
}
