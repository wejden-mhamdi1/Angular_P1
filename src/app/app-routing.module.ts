import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import{AbonnementComponent } from './abonnement/abonnement.component';
import{AddAbonnementComponent} from './add-abonnement/add-abonnement.component';
import{EvaluateComponent} from './evaluate/evaluate.component';
import{TemplateADMINComponent} from './template-admin/template-admin.component';
import{TemplateUSERComponent} from './template-user/template-user.component';
import { ChatComponent } from './chat/chat.component';
import { BadgeComponent } from './badge/badge.component';
import { EvaluateUserComponent } from './evaluate-user/evaluate-user.component';
import { PaymentComponent } from './payment/payment.component';

const routes: Routes = [
  {path:'', redirectTo:'home',pathMatch:"full"},
  {path:"home", component: HomeComponent},
 //hedhom teb3in payement
  {path:"payment",component:PaymentComponent},  
 { path: 'abonnement', component: AbonnementComponent },
 //fin
 
  { path: 'Admin', component: TemplateADMINComponent, 
    children: [
      { path: 'addAbonnement', component: AddAbonnementComponent },
      {path:"evaluate/:id",component:EvaluateComponent},
      {path:"chat",component:ChatComponent}
     
    
    ]
   },
   { path: 'User', component: TemplateUSERComponent, 
    children: [
      { path: 'abonnement', component: AbonnementComponent },
      {path:"evaluate",component:EvaluateUserComponent}, //ne9es zina pour ajout evaluate
      {path:"badge",component:BadgeComponent},//nothing
     
    
    ]
   }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
