import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
    selector: 'app-home',
    templateUrl: './adverpizing.component.html',
    styleUrls: ['./adverpizing.component.scss']
})
export class AdverpizingComponent  {
    date: string ;
    title: string;
    description: string;
    deadline: string;
    teacher: string;
    visible: boolean = false;
    id: string;

    constructor(private authService: AuthService,
  			private router: Router) { }
            onformSubmit(): void {
                console.log('post with value', this.date);
                const formVal = {
                date: this.date,
                title: this.title,
                description: this.description,
                deadline: this.deadline,
                teacher: this.teacher
                }
                this.authService.noticeBoard(formVal)
                    .subscribe(
                             (response: any)  => {
                                     console.log('success' , response.message.date );
                                     console.log(response.id);
                                     this.date = response.message.date;
                                     this.title = response.message.title;
                                     this.description = response.message.description;
                                     this.deadline = response.message.deadline;
                                     this.teacher = response.message.teacher;
                                     this.visible = true;
                                     this.id = response.id;
                                 },
                             (error: any) => {
                                     console.log('please get admin rights!');
                                     console.log(this.visible);
                                 }
                         );
            }
            setFlag(): void {
                this.visible = false;
                this.date = '';
                this.title = '';
                this.description = '';
                this.deadline = '';
                this.teacher = '';
            }
            deleteItem(): void {
                console.log('id is =============>',this.id);
                this.visible = false;
                this.authService.destroy(this.id)
                    .subscribe(
                        (response: any)  => {
                             console.log('success' , response);
                             this.date = '';
                            this.title = '';
                            this.description = '';
                            this.deadline = '';
                            this.teacher = '';
                            // this.router.navigate(['dashboard/adverpizing']);
                         },
                     (error: any) => {
                             //this.flashMessage.show('please register here!', {cssClass: 'alert-danger', timeout: 3000});
                             //this.router.navigate(['dashboard/signup']);
                             console.log('error');
                         });
            }

            retrieveItem(): void {
                console.log('get all items here');
            }
}


