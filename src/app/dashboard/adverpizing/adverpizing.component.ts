import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Observable } from 'rxjs/Observable';
import { Router } from '@angular/router';
import { Response } from '@angular/http';
import 'rxjs/add/observable/forkJoin';

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
    displayTable: boolean = false;
    id: string;
    dateInfo: string ;
    titleInfo: string;
    descriptionInfo: string;
    arrayList: any[] = [];

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
            destroyItem(): void {
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


            retrieveItem() {
        Observable.forkJoin(
            this.authService.getAll().map((res: Response) => res)
            ).subscribe(
                (response: any) => {
                    console.log('returned data is ====>', response[0]);
                    this.arrayList = JSON.parse(JSON.stringify(response[0]));
                    this.displayTable = true;
                },
                (error: any) => {
                    let errMsg = JSON.parse(error._body).message;
                    //this.notificationService.error(errMsg, 'ERROR');
                    //let link = ['dashboard/setup-business-employees'];
                    //this.router.navigate(link);
                }
            );
    }

    removeItem(userId: any): void {
            
        this.authService.destroy(userId)
                    .subscribe(
                        (response: any)  => {
                             console.log('success' , response);
                             this.visible = false;
                             this.date = '';
                            this.title = '';
                            this.description = '';
                            this.deadline = '';
                            this.teacher = '';
                            // if (this.id == userId) {
                            //  this.arrayList.splice(0 , 1);
                            // }

                            console.log('length of the array', this.arrayList.length);
                            for ( var count = 0; count < this.arrayList.length; count++) {
                                if (this.arrayList[count]['_id'] === userId) {
                                    this.arrayList.splice(count , 1);
                                    console.log('array element inside this is', this.arrayList[count]['_id']);
                                }
                            }
                        console.log('user id is==========>', userId);           

                         },
                     (error: any) => {
                             console.log('error');
                         });
    }
    hideTable(): void {
        this.displayTable = false;
        this.visible = false;
        console.log('display table value====>', this.displayTable);
        console.log('display visible value', this.visible);
    }
}


