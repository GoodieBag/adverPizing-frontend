import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
    selector: 'app-home',
    templateUrl: './adverpizing.component.html',
    styleUrls: ['./adverpizing.component.scss']
})
export class AdverpizingComponent  {
    date: string;
    title: string;
    desc: string;
    deadline: string;
    tchr: string;

    constructor(private authService: AuthService,
  			private router: Router) { }
            onformSubmit(): void {
                console.log('login with value', this.date);
                const formVal = {
                date: this.date,
                title: this.title,
                desc: this.desc,
                deadline: this.deadline,
                tchr: this.tchr
                }
                this.authService.authenticate(formVal)
                    .subscribe(
                             (response: any)  => {
                                     console.log('success' , response.token );
                                     this.authService.storeUserData(response.token , response.user);
                                     this.date = '';
                                     this.title = '';
                                     this.desc = '';
                                     this.deadline = '';
                                 },
                             (error: any) => {
                                     console.log('please register here!');
                                 }
                         );
            }
}


