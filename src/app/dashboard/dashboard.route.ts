import { Route } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { AdverpizingRoutes } from './adverpizing/adverpizing.route';



export const DashboardRoutes: Route[] = [
    {
        path: 'dashboard',
        component: DashboardComponent,
        children: [
            ...AdverpizingRoutes
        ]
    }
];
