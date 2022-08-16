import { Component, OnInit } from '@angular/core';
import { AbonnementService } from '../Service/abonnement.service';
import { AbonnementModule } from '../../app/Model/abonnement/abonnement.module';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';



@Component({
  selector: 'app-add-abonnement',
  templateUrl: './add-abonnement.component.html',
  styleUrls: ['./add-abonnement.component.css']
})
export class AddAbonnementComponent implements OnInit {
  abonnement : AbonnementModule = new AbonnementModule();
  AbonementList: AbonnementModule[];
  //id !: any;
  //msSaveOrOpenBlob :any;
  
  
  

  constructor(
   
    private AbonnementService : AbonnementService , private _router:Router){ }
    

  ngOnInit(): void {
    this.AbonnementService.getAllAbonnement().subscribe(prods=> {console.log(prods); this.AbonementList = prods;}
    
    );
    
  }
  
  ajoutAbonnement1(){
    this.AbonnementService.ajoutAbonnement(this.abonnement).subscribe(()=>this._router.navigateByUrl("/welcome/abonnement"));//homrlistuser

    }
    public remiseAbonnement(id:number)
    {
      this.AbonnementService.remiseAbonnement(id).subscribe(
        (date:AbonnementModule[])=>{
          this.AbonnementService.pass(date);
          console.log(date);
        }
      )
    }
    public addPourcentage(addPourcentage:NgForm):void {
      this.AbonnementService.addPourcentage(addPourcentage.value).subscribe(
        (data:AbonnementModule)=>{
          addPourcentage.reset();
         
          this.getList();
          
        }
      )
    }
    public getList(){
      this.AbonnementService.getAllAbonnement().subscribe(
        (data:AbonnementModule[])=>{
          this.AbonementList=data
          console.log(this.AbonementList)
        })}

 //
 exportPdf(id:number){
 
   this.AbonnementService.exportPdf(id).subscribe(x =>{
    let newVariable: any = window.navigator;
    const blob=new Blob([x],{type:'application/pdf'});
  if(navigator && newVariable.msSaveOrOpenBlob){
    newVariable.navigator.msSaveOrOpenBlob(blob);
    return;
  }
const data=window.URL.createObjectURL(blob);
  const link=document.createElement('a');
  link.href=data;
  link.download='abonnement.pdf';
  link.dispatchEvent(new MouseEvent('click',{bubbles:true,cancelable:true,view:window}));
  setTimeout(function(){
    window.URL.revokeObjectURL(data);
    link.remove();
  },100);
  });
}
public dorappel( id : number){
let resp= this.AbonnementService.rappel(id);
resp.subscribe()

}

public dosendsms(id : number){
let resp= this.AbonnementService.sendsms(id);
resp.subscribe();
}
      }