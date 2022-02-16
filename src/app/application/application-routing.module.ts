import {NgModule} from '@angular/core';
import {Route, RouterModule} from '@angular/router';
import { AppCoursesComponent } from './app-courses/app-courses.component';
import { AppUserRequestsComponent } from './app-user-requests/app-user-requests.component';

const rouets: Route[] = [
  {
    path: '', component: AppUserRequestsComponent, children: [
      {path: '', redirectTo: 'userRequests'},
      {path: 'userRequests', component: AppUserRequestsComponent},
      {path: 'courses', component: AppCoursesComponent},
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(rouets)
  ],
  exports: [
    RouterModule
  ]
})
export class ApplicationRoutingModule {
}
