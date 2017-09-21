import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {ViewUserComponent} from './view-user/view-user.component';

const routes: Routes = [
  {
    path: '',
    data: {
      title: 'User'
    },
    children: [
      {
        path: 'view',
        component: ViewUserComponent,
        data: {
          title: 'View User'
        }
      }

    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule {
}
