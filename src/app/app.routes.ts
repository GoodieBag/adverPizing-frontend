import { Routes } from '@angular/router';

import { HomeRoutes } from './home/home.route';
import { DashboardRoutes } from './dashboard/dashboard.route';
import { LoginRoutes } from './login/login.route';
import { SignupRoutes } from './signup/signup.route';

export const routes: Routes = [
    ...HomeRoutes,
    ...DashboardRoutes,
    ...LoginRoutes,
    ...SignupRoutes
];
