import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MyloginComponent } from './mylogin/mylogin.component';
import { ListofblogsComponent } from './listofblogs/listofblogs.component';
import { BlogdetailComponent } from './blogdetail/blogdetail.component';
import {FormsModule} from "@angular/forms";
import {RouterModule} from "@angular/router";
import { AuthenticationService } from "./_services/authentication.service";
import { BlogServiceService} from "./blog-service/blog-service.service";
import {HttpModule} from "@angular/http";
import { BlogGuardService} from './blog-guard.service';


const appRoutes = [
  {path: 'login', component: MyloginComponent},
  {path: 'blogs', component: ListofblogsComponent},
  { path: 'blogs/:id',
    canActivate: [ BlogGuardService ],
    component: BlogdetailComponent},
  { path:'',redirectTo:'login',pathMatch:'full'}
];


@NgModule({
  declarations: [
    AppComponent,
    MyloginComponent,
    ListofblogsComponent,
    BlogdetailComponent
  ],
  imports: [
    RouterModule.forRoot(
      appRoutes
    ),
    BrowserModule,
    HttpModule,
    FormsModule
  ],
  providers: [AuthenticationService, BlogServiceService, BlogGuardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
