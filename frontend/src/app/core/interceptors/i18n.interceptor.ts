import {Injectable} from '@angular/core';
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Observable} from 'rxjs';

//  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //
import {I18nService} from '../services/i18n.service';
export {I18nInterceptor};

////////////////////////////////////////////////////////////////////////////////
@Injectable()
class I18nInterceptor implements HttpInterceptor {

    //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //
    constructor(
        private readonly i18nSvc: I18nService,
    ) {
        return this;
    }

    //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //
    intercept(
        request: HttpRequest<unknown>,
        next: HttpHandler,
    ): Observable<HttpEvent<unknown>> {
        const lang = this.i18nSvc.language.get().value;
        if(lang != null) {
            request.headers.set('Accept-Language', lang);
            if(request.body != null) {
                request.headers.set('Content-Language', lang);
            }
        }
        return next.handle(request);
    }
}
