import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { SideBarComponent } from './side-bar/side-bar.component';
import { NavaBarComponent } from './nava-bar/nava-bar.component';
import { ContentHomeComponent } from './content-home/content-home.component';
import { AbonnementComponent } from './abonnement/abonnement.component';
import { AddAbonnementComponent } from './add-abonnement/add-abonnement.component';
import { FormsModule } from '@angular/forms';
import { PaymentComponent } from './payment/payment.component';
import { EvaluateComponent } from './evaluate/evaluate.component';
import { NavbarAdminComponent } from './navbar-admin/navbar-admin.component';
import { SidebarAdminComponent } from './sidebar-admin/sidebar-admin.component';
import { TemplateUSERComponent } from './template-user/template-user.component';
import { TemplateADMINComponent } from './template-admin/template-admin.component';
import { ChatComponent } from './chat/chat.component';
import { UserComponent } from './user/user.component';
import { BadgeComponent } from './badge/badge.component';
import { EvaluateUserComponent } from './evaluate-user/evaluate-user.component';
import { ModalModule } from "ngx-bootstrap/modal";


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SideBarComponent,
    NavaBarComponent,
    ContentHomeComponent,
    AbonnementComponent,
    AddAbonnementComponent,
    PaymentComponent,
    EvaluateComponent,
    NavbarAdminComponent,
    SidebarAdminComponent,
         TemplateUSERComponent,
         TemplateADMINComponent,
         ChatComponent,
         UserComponent,
         BadgeComponent,
         EvaluateUserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ModalModule.forRoot(),
  

 FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
