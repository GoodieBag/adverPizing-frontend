import { Component, OnInit } from '@angular/core';
import { SignupService } from '../../services/signup.service';
import { Router } from '@angular/router';

@Component({
    selector: 'app-home',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
    username: string;
    password: string;
    constructor(private signupService: SignupService,
  			private router: Router) { }
    ngOnInit() { }

    onLoginSubmit() : void {
   	console.log('login with value', this.username);
    	const user = {
    	username : this.username,
    	password : this.password

    	}
        this.signupService.authenticate(user)
            .subscribe(
                     (response: any)  => {
                             console.log('success' , response.token );
                             this.signupService.storeUserData(response.token , response.user);
                             this.username = '';
                             this.password = '';
                         },
                     (error: any) => {
                             console.log('please register here!');
                             this.router.navigate(['dashboard/signup']);
                         }
                 );
    }
}


