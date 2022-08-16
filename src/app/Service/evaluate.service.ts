import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { EvaluateModule } from '../../app/Model/evaluate/evaluate.module';
import { Observable } from 'rxjs';
import { UserModule } from '../Model/user/user.module';
@Injectable({
  providedIn: 'root'
})
export class EvaluateService {
  public evaluatetUrl : string = 'http://localhost:8089/evaluate/getAll';
  public userUrl : string = 'http://localhost:8089/user/users';
  constructor(private http : HttpClient) { }
  getUsers(){
    return this.http.get<UserModule[]>(this.userUrl);}
   //get evaluate
   getAllEvaluate() : Observable< EvaluateModule[]>{
    return this.http.get<EvaluateModule[]>( this.evaluatetUrl);}
    //AddTonAvisNOTE
   /* public AddTonAvisNOTE(id : number):Observable<EvaluateModule>{
      const url='http://localhost:8089/evaluate/AddTonAvisNOTE/'
     return this.http.post<EvaluateModule>(`${url}${id}`,{responseType:'EvaluateModule'})
     
    }*/
    AddTonAvisNOTE(id:number, evaluate : EvaluateModule ){
      return this.http.post<EvaluateModule>("http://localhost:8089/evaluate/AddTonAvisNOTE/"+2,evaluate);
      }
      //liste tri
      getListTriGold(id : number) : Observable<UserModule[]>{
    
        const url = 'http://localhost:8089/user/ListTri/'
   
          return this.http.get<UserModule[]>(`${url}${id}`);
         }
        
 
}
