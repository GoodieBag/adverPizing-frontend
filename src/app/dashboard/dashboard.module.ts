import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { DashboardComponent } from './dashboard.component';
import { LoginModule } from './login/login.module';
import { SignupModule } from './signup/signup.module';


@NgModule({
    imports: [
        CommonModule,
        RouterModule,
        LoginModule,
        SignupModule
       ],
    declarations: [DashboardComponent],
    exports: [DashboardComponent]
})

export class DashboardModule { }
