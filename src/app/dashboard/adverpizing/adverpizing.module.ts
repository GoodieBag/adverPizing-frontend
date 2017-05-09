import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {Ng2PaginationModule} from 'ng2-pagination';


import { AdverpizingComponent } from './adverpizing.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        Ng2PaginationModule
    ],
    declarations: [AdverpizingComponent],
    exports: [AdverpizingComponent]
})

export class AdverpizingModule { }
