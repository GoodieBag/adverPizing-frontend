import { Routes } from '@angular/router';

import { HomeRoutes } from './home/home.route';
import { DashboardRoutes } from './dashboard/dashboard.route';

export const routes: Routes = [
    ...HomeRoutes,
    ...DashboardRoutes
];
