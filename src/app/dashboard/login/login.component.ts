import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-home',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
    private info: any = {};
    constructor() { }
    ngOnInit() { }

    onLoginSubmit() : void {
    	console.log('login with value', this.info);
    }
}


