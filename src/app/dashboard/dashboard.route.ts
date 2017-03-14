import { Route } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { LoginRoutes } from './login/login.route';
import { SignupRoutes } from './signup/signup.route';


export const DashboardRoutes: Route[] = [
    {
        path: 'dashboard',
        component: DashboardComponent,
        children: [
            ...LoginRoutes,
            ...SignupRoutes
        ]
    }
];
