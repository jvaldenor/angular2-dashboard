import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
// Import containers
import {FullLayout, SimpleLayout} from './containers';
// Import components
import {AppAside, AppBreadcrumbs, AppFooter, AppHeader, AppSidebar} from './components';
// Import directives
import {AsideToggleDirective, NAV_DROPDOWN_DIRECTIVES, SIDEBAR_TOGGLE_DIRECTIVES} from './directives';
// Import routing module
import {AppRoutingModule, routes} from './app.routing';
// Import 3rd party components
import {BsDropdownModule} from 'ngx-bootstrap/dropdown';
import {TabsModule} from 'ngx-bootstrap/tabs';
import {ChartsModule} from 'ng2-charts/ng2-charts';
import {AuthGuard} from '../accounts/_guards/auth.guard';
import {AlertService} from '../accounts/_services/alert.service';
import {AuthenticationService} from '../accounts/_services/authentication.service';
import {UserService} from '../accounts/_services/user.service';
import {HttpModule} from '@angular/http';
import {FormsModule} from '@angular/forms';
import {LoginComponent} from '../accounts/login/login.component';
import {RegisterComponent} from '../accounts/register/register.component';
import {AccountsComponent} from '../accounts/accounts.component';
import {AlertComponent} from '../accounts/_directives/alert.component';
import {UserComponent} from '../accounts/user/user.component';
import {LocationStrategy, PathLocationStrategy} from '@angular/common';
import {RouterModule} from '@angular/router';

const APP_CONTAINERS = [
  FullLayout,
  SimpleLayout
]


const APP_COMPONENTS = [
  AppAside,
  AppBreadcrumbs,
  AppFooter,
  AppHeader,
  AppSidebar
]


const APP_DIRECTIVES = [
  AsideToggleDirective,
  NAV_DROPDOWN_DIRECTIVES,
  SIDEBAR_TOGGLE_DIRECTIVES
]

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routes),
    AppRoutingModule,
    BsDropdownModule.forRoot(),
    TabsModule.forRoot(),
    ChartsModule
  ],
  declarations: [
    AppComponent,
    ...APP_CONTAINERS,
    ...APP_COMPONENTS,
    ...APP_DIRECTIVES,
    LoginComponent,
    RegisterComponent,
    AccountsComponent,
    AlertComponent,
    UserComponent
  ],
  providers: [
    {
    provide: LocationStrategy,
    // useClass: HashLocationStrategy,
    useClass: PathLocationStrategy,

  },
    AuthGuard,
    AlertService,
    AuthenticationService,
    UserService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
