import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import { ToastrService } from 'toastr-ng2';


@Component({
    selector: 'app-home',
    templateUrl: './signup.component.html',
    styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
    private info: any = {};


     constructor(private authService: AuthService,
                 private router: Router,
                  private toastrService: ToastrService ) { }
        ngOnInit() { }
    formSubmit() {

        console.log('Form Sumitted with values--->', this.info);

             this.authService.store(this.info)
             .subscribe(
                     (response: any)  => {
                             console.log('success');
                             this.toastrService.success('Successfully Registered!Now you can log in', 'Success!');
                             this.router.navigate(['/login']);
                         },
                     (error: any) => {
                             this.toastrService.error('Enter valid input', 'Error');
                             console.log('error');
                         }
                 );
    }

}
