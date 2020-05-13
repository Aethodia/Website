import {Component, OnInit} from '@angular/core';

//  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //
import {DocumentService} from 'app/framework/framework.module';
import {EndpointsService} from 'app/shared/shared.module';
export {HomeComponent};

////////////////////////////////////////////////////////////////////////////////
@Component({
    templateUrl: './home.component.html',
})
class HomeComponent implements OnInit{

    //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //
    constructor(
        private readonly meta: DocumentService,
        private readonly endpoints: EndpointsService,
    ) {
        return this;
    }

    //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //
    public ngOnInit(): void {
        this.endpoints.graphql.receive().subscribe();

        // this.docSvc.title.set('Theodia, the Technocratic Republic'); //FIXME: This crashes the app for some reason.
        this.meta.description.set('The official website of the Technocratic Republic of Theodia');
        this.meta.keywords.set(['Theodia', 'micronation', 'technocracy']);
    }
}
