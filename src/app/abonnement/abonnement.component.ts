import { Component, OnInit, TemplateRef } from '@angular/core';
import { AbonnementService } from '../Service/abonnement.service';
import { AbonnementModule } from '../../app/Model/abonnement/abonnement.module';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-abonnement',
  templateUrl: './abonnement.component.html',
  styleUrls: ['./abonnement.component.css']
})
export class AbonnementComponent implements OnInit {

  AbonementList: AbonnementModule[];
  hidden : boolean;
  modalRef: BsModalRef;
  test:AbonnementModule;
  price :number=0;
  method:string="point";
  text:String=""

  
  constructor(
    
   private AbonnementService : AbonnementService ,private route:Router,private modalService: BsModalService
    ) { }

  ngOnInit(): void {

    //getAll USER
   this.AbonnementService.getAllAbonnement().subscribe(prods=> {console.log(prods); this.AbonementList = prods;}
    
   );
   }
   //ajoutabonnement non pas travail
   ajoutAbonnement(abonnement: AbonnementModule) {
      this.AbonnementService.ajoutAbonnement(abonnement).subscribe(
        () => this.AbonementList.push(abonnement)
      )
      this.hidden = true;
   
  
    }
    //remise ADMIN
    public remiseAbonnement(id:number)
    {
      this.AbonnementService.remiseAbonnement(id).subscribe(
        (date:AbonnementModule[])=>{
          this.AbonnementService.pass(date);
          console.log(date);
        }
      )
    }
    //payement
    openModalPoint(templatePoint: TemplateRef<any>){
      this.modalRef = this.modalService.show(templatePoint);  
      this.modalRef.hide()
    }
      openModal(templateupdate: TemplateRef<any>){
      this.modalRef = this.modalService.show(templateupdate);  
    }
    checkMethod(methodForm:NgForm,templatePoint: TemplateRef<any>){
      if(methodForm.value.carte){
        this.modalRef.hide();
        this.route.navigate(['/payment'])
      }
      if(methodForm.value.point){
        this.modalRef = this.modalService.show(templatePoint);

      }

      
    }
    
    public sentOrder(test :AbonnementModule){
      this.test=test;
      this.AbonnementService.passData(this.test);
      this.route.navigate(['/payment']);

        }
   

   
  }


