import { Component, OnInit } from '@angular/core';
import { SignupService } from '../../services/signup.service';

@Component({
    selector: 'app-home',
    templateUrl: './signup.component.html',
    styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
    private info: any = {};


     constructor(private signupService: SignupService ) { }
        ngOnInit() { }
    submit() {

        console.log('Form Sumitted with values--->', this.info);

             this.signupService.store(this.info)
             .subscribe(
                     (response: any)  => {
                             console.log('success');
                         },
                     (error: any) => {
                             console.log('error');
                         }
                 );
    }

}
