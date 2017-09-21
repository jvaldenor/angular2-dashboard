import {NgModule} from '@angular/core';

// Components Routing
import {ViewUserComponent} from './view-user/view-user.component';
import {UserRoutingModule} from './user-routing.module';


// Forms Component
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';


// Modal Component
import { ModalModule } from 'ngx-bootstrap/modal';

// Tabs Component
import { TabsModule } from 'ngx-bootstrap/tabs';

@NgModule({
  imports: [
    UserRoutingModule,
    BsDropdownModule.forRoot(),
    ModalModule.forRoot(),
    TabsModule
  ],
  declarations: [
    ViewUserComponent,
  ]
})
export class UserModule {
}
