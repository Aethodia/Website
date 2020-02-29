import {Component} from '@angular/core';

//  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //
import {EndpointsService} from 'app/shared/services/endpoints.service';

////////////////////////////////////////////////////////////////////////////////
@Component({
    templateUrl: './home.component.html',
})
class HomeComponent {
    public testText: string;

    //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //
    constructor(
        private readonly endpoints: EndpointsService
    ) {
        this.testText = 'Loading...';
        this.endpoints.test.get().subscribe({
            next: (response: string): void => {
                this.testText = response;
            },
        });
        return this;
    }
}

////////////////////////////////////////////////////////////////////////////////
export {HomeComponent};
