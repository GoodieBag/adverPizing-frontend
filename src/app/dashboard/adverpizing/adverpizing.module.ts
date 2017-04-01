import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { AdverpizingComponent } from './adverpizing.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule
    ],
    declarations: [AdverpizingComponent],
    exports: [AdverpizingComponent]
})

export class AdverpizingModule { }
