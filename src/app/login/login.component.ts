import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import { FlashMessagesService } from 'angular2-flash-messages';
import { ToastrService } from 'toastr-ng2';

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
              private flashMessagesService: FlashMessagesService,
              private toastrService: ToastrService ) { }
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
                             this.toastrService.success('Successfully Logged In', 'Success!');
                             this.router.navigate(['dashboard/adverpizing']);
                         },
                     (error: any) => {
                             //this.flashMessagesService.show('please register here!', {cssClass: 'alert-danger', timeout: 3000});
                             this.toastrService.error('Incorrect password or emailID', 'Error');
                             console.log('error');
                             this.router.navigate(['dashboard/signup']);
                         }
                 );
    }

    navigate(){
        this.router.navigate(['/']);
    }
}


