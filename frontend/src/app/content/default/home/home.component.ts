import {Component, OnInit} from '@angular/core';
import {DocumentService} from 'app/framework/framework.module';
export {HomeComponent};

////////////////////////////////////////////////////////////////////////////////
@Component({
    templateUrl: './home.component.html',
})
class HomeComponent implements OnInit{

    //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //
    constructor(
        private readonly docSvc: DocumentService,
    ) {
        return this;
    }

    //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //
    public ngOnInit(): void {
        // this.docSvc.title.set('Theodia, the Technocratic Republic'); //FIXME: This crashes the app for some reason.
        this.docSvc.description.set('The official website of the Technocratic Republic of Theodia');
        this.docSvc.keywords.set(['Theodia', 'micronation', 'technocracy']);
    }
}
