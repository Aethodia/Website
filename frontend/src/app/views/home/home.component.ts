import {Component, OnInit} from '@angular/core';
import {MetadataService, I18nPipe} from 'app/core/core.module';
// import {EndpointsService} from 'app/shared/shared.module';
export {HomeComponent};

////////////////////////////////////////////////////////////////////////////////
@Component({
    templateUrl: './home.component.html',
})
class HomeComponent implements OnInit {

    //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //
    constructor(
        private readonly meta: MetadataService,
        // private readonly endpoints: EndpointsService,
        private readonly i18n: I18nPipe,
    ) {
        return this;
    }

    //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //
    public ngOnInit(): void {
        this.meta.quickSet(this.i18n);
        // this.endpoints.graphql.receive().subscribe();
    }
}
