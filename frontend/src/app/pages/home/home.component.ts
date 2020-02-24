import {Component} from "@angular/core";

//  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //
import {AppRestService} from 'app/shared/services/rest.service';

////////////////////////////////////////////////////////////////////////////////
@Component({
    templateUrl: './home.component.html',
})
class AppPagesHomeComponent {
    public testText: string;

    //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //
    constructor(
        private readonly rest: AppRestService
    ) {
        this.testText = 'Loading...';
        this.rest.endpoints.test.get().subscribe({
            next: (response: string) => {
                this.testText = response;
            },
        });
        return this;
    }
}

////////////////////////////////////////////////////////////////////////////////
export {AppPagesHomeComponent};
