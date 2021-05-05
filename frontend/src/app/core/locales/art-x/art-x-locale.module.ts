import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';

//  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //
import {DefaultCalendarPipe} from './calendars/default-calendar.pipe';
import {EarthlingCalendarPipe} from './calendars/earthling-calendar.pipe';
import {MartianCalendarPipe} from './calendars/martian-calendar.pipe';
import {ReferenceCalendarPipe} from './calendars/reference-calendar.pipe';

//  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //
export {
    ArtXLocaleModule,

    // Pipes
    ReferenceCalendarPipe,
    DefaultCalendarPipe,
    EarthlingCalendarPipe,
    MartianCalendarPipe,
};

////////////////////////////////////////////////////////////////////////////////
@NgModule({
    imports: [
        CommonModule,
    ],
    exports: [
        ReferenceCalendarPipe,
        DefaultCalendarPipe,
        EarthlingCalendarPipe,
        MartianCalendarPipe,
    ],
    declarations: [
        ReferenceCalendarPipe,
        DefaultCalendarPipe,
        EarthlingCalendarPipe,
        MartianCalendarPipe,
    ],
    providers: [
        ReferenceCalendarPipe,
        DefaultCalendarPipe,
        EarthlingCalendarPipe,
        MartianCalendarPipe,
    ],
})

//  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //
/** Code necessary for localization into Theodian. */
class ArtXLocaleModule {}
