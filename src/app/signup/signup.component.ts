import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';


@Component({
    selector: 'app-home',
    templateUrl: './signup.component.html',
    styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
    private info: any = {};


     constructor(private authService: AuthService,
                 private router: Router ) { }
        ngOnInit() { }
    formSubmit() {

        console.log('Form Sumitted with values--->', this.info);

             this.authService.store(this.info)
             .subscribe(
                     (response: any)  => {
                             console.log('success');
                             this.router.navigate(['/login']);
                         },
                     (error: any) => {
                             console.log('error');
                         }
                 );
    }

}
