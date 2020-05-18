import {Component, OnInit} from '@angular/core';

//  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //
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
        // this.endpoints.graphql.receive().subscribe();

        //TODO: Automatically set `meta` tags for every module.
        this.meta.set({
            title: this.i18n.transform('META_TITLE'),
            description: this.i18n.transform('META_DESCRIPTION'),
            keywords: this.i18n.transform('META_KEYWORDS'),
        });
    }
}
