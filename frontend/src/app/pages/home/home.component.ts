import {Component} from "@angular/core";

//  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //
import {AppEndpointService} from 'app/shared/services/endpoint.service';

////////////////////////////////////////////////////////////////////////////////
@Component({
    templateUrl: './home.component.html',
})
class AppPagesHomeComponent {
    public testText: string;

    //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //
    constructor(
        private readonly restSvc: AppEndpointService
    ) {
        this.testText = 'Loading...';
        this.restSvc.test.get().subscribe({
            next: (response: string): void => {
                this.testText = response;
            },
        });
        return this;
    }
}

////////////////////////////////////////////////////////////////////////////////
export {AppPagesHomeComponent};
