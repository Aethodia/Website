import {Component} from "@angular/core";
export {GlobalHeaderComponent};

////////////////////////////////////////////////////////////////////////////////
interface Button {
    text: string;
    route: string;
}

////////////////////////////////////////////////////////////////////////////////
@Component({
    selector: 'global-header',
    templateUrl: './global-header.template.html',
    styleUrls: ['./global-header.style.scss'],
})
class GlobalHeaderComponent {

    //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //
    public readonly buttons: Button[] = [{
        text: 'THEODIA',
        route: '/',
    }, {
        text: 'LOGIN',
        route: '/auth',
    }];
}
