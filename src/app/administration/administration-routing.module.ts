import {NgModule} from '@angular/core';
import {Route, RouterModule} from '@angular/router';
import { AdminCategoryComponent } from './admin-category/admin-category.component';
import { EditAdminCategoryComponent } from './admin-category/edit-admin-category/edit-admin-category.component';
import { AdminCourseComponent } from './admin-course/admin-course.component';
import { EditAdminCourseComponent } from './admin-course/edit-admin-course/edit-admin-course.component';
import { AdminTutorComponent } from './admin-tutor/admin-tutor.component';
import { EditAdminTutorComponent } from './admin-tutor/edit-admin-tutor/edit-admin-tutor.component';
import { AdminUserComponent } from './admin-user/admin-user.component';
import { EditAdminUserComponent } from './admin-user/edit-admin-user/edit-admin-user.component';
import { AdministrationComponent } from './administration.component';

const rouets: Route[] = [
  {
    path: '', component: AdministrationComponent, children: [
      {path: '', redirectTo: 'users'},
      {path: 'users', component: AdminUserComponent, children:[
        {path: 'editUser', component: EditAdminUserComponent},
      ]},
      {path: 'categories', component: AdminCategoryComponent, children:[
        {path: 'editCategory', component: EditAdminCategoryComponent},
      ]},
      {path: 'courses', component: AdminCourseComponent, children:[
        {path: 'editCourse', component: EditAdminCourseComponent},
      ]},
      {path: 'tutors', component: AdminTutorComponent, children:[
        {path: 'editTutor', component: EditAdminTutorComponent},
      ]},
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
export class AdministrationRoutingModule {
}
