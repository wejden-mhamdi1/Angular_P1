import { NgModule } from "@angular/core";
import { UserModule } from "../user/user.module";

export class AbonnementModule {   
   id: any;
  prix : any;
  pourcentage : number;
  dateDebut: Date;
  dateFin: Date;
  typeAbonnement : String;
  status: boolean;
  user:UserModule;
  //post.user.username
 
}
