import { Injectable } from '@angular/core';
import { Http, Headers, Response} from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class AuthService  {
    authToken: any;
    element: any;
    user: any;
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

    authenticate(user): Observable<any> {
        console.log('Inside signup function', user);
        let headers = new Headers();
            headers.append('Content-Type', 'application/json');
         return this.http.post('http://localhost:3000/users/login/', user , {headers : headers})
            .map(res => res.json());
    
    }


    noticeBoard(formVal): Observable<any> {
        console.log('Inside signup function', formVal);
        let headers = new Headers();
            headers.append('Content-Type', 'application/json');
         return this.http.post('http://localhost:3000/noticeboard/', formVal , {headers : headers})
            .map(res => res.json());
    }


    storeUserData(token , user) {
        localStorage.setItem('id_token', token);
        localStorage.setItem('user', JSON.stringify(user));

        this.authToken = token;
        this.user = user;

    }

    loadToken() {
        const token = localStorage.getItem('id_token');
        this.authToken = token;
    }



    logout() {
        this.authToken = null;
        this.user = null;
        localStorage.clear();
    }
}
