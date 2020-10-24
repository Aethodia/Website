import {Component} from "@angular/core";
export {GlobalHeaderComponent};

////////////////////////////////////////////////////////////////////////////////
interface Button {
    text: string;
    state: string;
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
        state: 'home',
    }, {
        text: 'LOGIN',
        state: 'auth',
    }];

    //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //
    public changeState(state: string): void {
        //TODO
    }
}
