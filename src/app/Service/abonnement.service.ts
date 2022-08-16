import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AbonnementModule } from '../../app/Model/abonnement/abonnement.module';
const httpOption ={
  Headers: new HttpHeaders({'content-Type': 'application/json'})
};
//const requestOptions = Object.assign(
  //{}, 
 // { responseType: 'json' }, 
 
//);
@Injectable({
  providedIn: 'root'
})
export class AbonnementService {
  output !:AbonnementModule;
  

  public abonnementUrl : string = 'http://localhost:8089/abonnement/getAll';
  public abonnementUrlAdd :  string = 'http://localhost:8089/abonnement/ajoutAbonnement';

  constructor(private http : HttpClient) { }
   //get abonnement
   getAllAbonnement() : Observable< AbonnementModule[]>{
    return this.http.get<AbonnementModule[]>( this.abonnementUrl);}
       //add abonnement
      ajoutAbonnement(abonnement: AbonnementModule){
    return this.http.post<AbonnementModule>(this.abonnementUrlAdd, abonnement)}
   
   
    //RemiseAbonn
    public remiseAbonnement(id : number):Observable<AbonnementModule[]>{
      const url='http://localhost:8089/abonnement/RemiseAbonn/'
     return this.http.get<AbonnementModule[]>(`${url}${id}`)
     
    }
    listAbonnement:AbonnementModule[];
public pass(listAbonnement:AbonnementModule[]){
this.listAbonnement=listAbonnement
}
     //AjouterPourcentage
     public addPourcentage(abonnement:AbonnementModule):Observable<AbonnementModule>{ //observable ki tabda response abonnementmodel
      const url='http://localhost:8089/abonnement/AjouterPourcentage/2' //soit user id=2
      return this.http.post<AbonnementModule>(url,abonnement);
    }
    
    


    //sendSms id
    public sendsms(id : number ) {
      const url = 'http://localhost:8089/abonnement/sendSms/'
      return this.http.get(`${url}${id}`);
    }
    
    //Rappel id
    //baseURL: string = "http://localhost:8089/abonnement/Rappel/";
   public rappel( id : number){
  
     const url = 'http://localhost:8089/abonnement/Rappel/'
   
          return this.http.get(`${url}${id}`);
        }
            
    //downloadPDFResource
   exportPdf(id : number):Observable<Blob>{
     const url='http://localhost:8089/abonnement/download/'
      return this.http.get(`${url}${id}`,{responseType:'blob'}); 
        }
  
   //payement
   public returnData(){
    return this.output
  }
  public confirmerToStripe(AbonnementModule:AbonnementModule):Observable<any>{
    const url = 'http://localhost:8089/stripe/confirm/'
    return this.http.post<any>(url,AbonnementModule);
  }
  public addCarteToStripe(n:any):Observable<any>{
    const url ='http://localhost:8089/stripe/addcarte/1';
    return this.http.post<any>(url,n);
  }
  public addOrderToStripe(id:number):Observable<any>{
    const url = 'http://localhost:8089/stripe/paymentintent/'
    return this.http.get<any>(`${url}${id}`)
  }
  public passData(input:AbonnementModule){
    this.output=input
  }
 
    
 
  
   

}
