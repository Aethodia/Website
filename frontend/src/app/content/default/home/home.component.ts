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
        this.docSvc.set.title('Theodia, the Technocratic Republic');
        this.docSvc.set.description('The official website of the Technocratic Republic of Theodia');
        this.docSvc.set.keywords(['Theodia', 'micronation', 'technocracy']);
    }
}
