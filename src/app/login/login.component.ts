import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
//import { FlashMessagesService } from 'angular2-flash-messages';

@Component({
    selector: 'app-home',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
    username: string;
    password: string;
    constructor(private authService: AuthService,
  			    private router: Router,
              ) { }
    ngOnInit() { }

    onLoginSubmit() : void {
   	console.log('login with value', this.username);
    	const user = {
    	username : this.username,
    	password : this.password
        }
        this.authService.authenticate(user)
            .subscribe(
                     (response: any)  => {
                             console.log('success' , response.token );
                             this.authService.storeUserData(response.token , response.user);
                             this.username = '';
                             this.password = '';
                             this.router.navigate(['dashboard/adverpizing']);
                         },
                     (error: any) => {
                             //this.flashMessage.show('please register here!', {cssClass: 'alert-danger', timeout: 3000});
                             this.router.navigate(['dashboard/signup']);
                         }
                 );
    }
}


