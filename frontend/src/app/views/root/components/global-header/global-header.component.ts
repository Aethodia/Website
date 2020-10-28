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
    public readonly leftButtons: Button[] = [{
        text: 'HOME_NAV_BUTTON',
        route: '/',
    }, {
        text: 'FORMS_NAV_BUTTON',
        route: '/forms',
    }, {
        text: 'SERVICES_NAV_BUTTON',
        route: '/services',
    }];

    //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //
    public readonly rightButtons: Button[] = [{
        text: 'ACCOUNT_NAV_BUTTON',
        route: '/account',
    }, {
        text: 'LOGIN_NAV_BUTTON',
        route: '/auth',
    }];
}
