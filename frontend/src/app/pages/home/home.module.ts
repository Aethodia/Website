import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

//  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //
import {HomeComponent} from './home.component';

////////////////////////////////////////////////////////////////////////////////
@NgModule({
    imports: [
        CommonModule,
    ],
    exports: [],
    declarations: [
        HomeComponent,
    ],
    providers: [],
})

//  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //
class HomeModule {}

////////////////////////////////////////////////////////////////////////////////
export {
    HomeModule,
    HomeComponent,
};
