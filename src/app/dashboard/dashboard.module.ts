import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { DashboardComponent } from './dashboard.component';

import { AdverpizingModule } from './adverpizing/adverpizing.module';


@NgModule({
    imports: [
        CommonModule,
        RouterModule,
        AdverpizingModule
       ],
    declarations: [DashboardComponent],
    exports: [DashboardComponent]
})

export class DashboardModule { }
