import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeModule } from './home/home.module';
import { DashboardModule } from './dashboard/dashboard.module';
import { LoginModule } from './login/login.module';
import { SignupModule } from './signup/signup.module';

import { routes } from './app.routes';
import { FlashMessagesModule } from 'angular2-flash-messages';
import { ToastrModule } from 'toastr-ng2';
import {Ng2PaginationModule} from 'ng2-pagination';

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        HomeModule,
        LoginModule,
        SignupModule,
        DashboardModule,
        RouterModule.forRoot(routes),
        FlashMessagesModule,
        ToastrModule.forRoot(),
        Ng2PaginationModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
