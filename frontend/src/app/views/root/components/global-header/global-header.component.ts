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
        text: 'HOME_NAV_BUTTON',
        route: '/',
    }, {
        text: 'LOGIN_NAV_BUTTON',
        route: '/auth',
    }];
}
