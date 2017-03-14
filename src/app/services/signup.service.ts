import { Injectable } from '@angular/core';
import { Http, Headers, Response} from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class SignupService  {
    constructor(private http: Http) {
        console.log('signup constructor is called');
    }

     store(element: any): Observable<any> {
        console.log('Inside signup function', element);
         return this.http.post('http://localhost:3000/api/signup/', element)
            .map((response: Response) => {
                return response;
            });
    }
}
