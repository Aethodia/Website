import {Component} from "@angular/core";

//  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //
import {EndpointService} from 'app/shared/services/endpoint.service';

////////////////////////////////////////////////////////////////////////////////
@Component({
    templateUrl: './home.component.html',
})
class HomeComponent {
    public testText: string;

    //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //
    constructor(
        private readonly restSvc: EndpointService
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
export {HomeComponent};
