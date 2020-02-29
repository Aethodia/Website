import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

//  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //
import {HomeComponent} from './home/home.component';
import {LoginComponent} from './login/login.component';

////////////////////////////////////////////////////////////////////////////////
@NgModule({
    imports: [
        CommonModule,
    ],
    exports: [],
    declarations: [
        HomeComponent,
        LoginComponent,
    ],
    providers: [],
})

//  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //
class DefaultModule {}

////////////////////////////////////////////////////////////////////////////////
export {
    DefaultModule,
};
