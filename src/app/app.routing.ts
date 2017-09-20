import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
// Import Containers
import {FullLayout, SimpleLayout} from './containers';
import {AuthGuard} from '../accounts/_guards/auth.guard';
import {LoginComponent} from '../accounts/login/login.component';
import {RegisterComponent} from '../accounts/register/register.component';

export const routes: Routes = [
  // {
  //   path: '',
  //   redirectTo: 'dashboard',
  //   pathMatch: 'full',
  //   canActivate: [AuthGuard]
  // },
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  // // otherwise redirect to home
  //
  // {path: '', redirectTo: 'dashboard', pathMatch: 'full'},
  // {path: '**', redirectTo: 'login'},

  {
    path: '',
    // pathMatch: 'full',
    component: FullLayout,
    canActivate: [AuthGuard],
    data: {
      title: 'Home'
    },
    children: [
      {
        path: 'dashboard',
        // pathMatch: 'full',
        loadChildren: './views/dashboard/dashboard.module#DashboardModule'
        // loadChildren: 'DashboardModule'

      },
      {
        path: 'components',
        loadChildren: './views/components/components.module#ComponentsModule'
      },
      {
        path: 'icons',
        loadChildren: './views/icons/icons.module#IconsModule'
      },
      {
        path: 'widgets',
        loadChildren: './views/widgets/widgets.module#WidgetsModule'
      },
      {
        path: 'charts',
        loadChildren: './views/chartjs/chartjs.module#ChartJSModule'
      }
    ]
  },
  {
    path: 'pages',
    component: SimpleLayout,
    data: {
      title: 'Pages'
    },
    children: [
      {
        path: '',
        loadChildren: './views/pages/pages.module#PagesModule',
      }
    ]
  }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
