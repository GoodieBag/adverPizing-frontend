import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
//import { FlashMessagesModule } from 'angular2-flash-messages';

import { LoginComponent } from './login.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
       // FlashMessagesModule
    ],
    declarations: [LoginComponent],
    exports: [LoginComponent]
})

export class LoginModule { }
