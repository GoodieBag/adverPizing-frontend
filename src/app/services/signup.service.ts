import { Injectable } from '@angular/core';
import { Http, Headers, Response} from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class SignupService  {
    authToken: any;
    element: any;
    constructor(private http: Http) {
        console.log('signup constructor is called');
    }

     store(element: any): Observable<any> {
        console.log('Inside signup function', element);
        let headers = new Headers();
            headers.append('Content-Type', 'application/json');
         return this.http.post('http://localhost:3000/users/register/', element , {headers : headers})
            .map(res => res.json());
    }
}
