import { Component, OnInit } from '@angular/core';
import { EvaluateService } from '../Service/evaluate.service';
import { EvaluateModule } from '../../app/Model/evaluate/evaluate.module';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { UserModule } from '../Model/user/user.module';

@Component({
  selector: 'app-evaluate',
  templateUrl: './evaluate.component.html',
  styleUrls: ['./evaluate.component.css']
})
export class EvaluateComponent implements OnInit {
  EvaluateList: EvaluateModule[];
  ListTrie: EvaluateModule[];
  listeUsers : UserModule[];
  id :number;
  evaluate:EvaluateModule=new EvaluateModule();
  constructor( private EvaluateService : EvaluateService, private _router:Router) { }

  ngOnInit(): void {
     //getAll evaluate
   this.EvaluateService.getAllEvaluate().subscribe(prods=> {console.log(prods); this.EvaluateList = prods;
    //this.EvaluateService.getListTriGold(this.id).subscribe(prodd=> {console.log(prodd); this.ListTrie = prodd;
  }
    
   );
  /* this.EvaluateService.getUsers().subscribe(prods=> {console.log(prods); this.listeUsers = prods;});*/
  }
  

   /* add(){
      this.EvaluateService.AddTonAvisNOTE(this.id, this.evaluate).subscribe(()=>this._router.navigateByUrl("/home/wej"));
      }*/

    public getList(){
      this.EvaluateService.getAllEvaluate().subscribe(
        (data:EvaluateModule[])=>{
          this.EvaluateList=data
          console.log(this.EvaluateList)
        })}
        //gold tri
        public getListTriGold(id : number){
          console.log("+++++",id);
          let resp= this.EvaluateService.getListTriGold(id);
          resp.subscribe();
          }
         // public getListTriGold(id : number){
          //  this.EvaluateService.getListTriGold(id).subscribe(
            // (d:EvaluateModule[])=>{
           //this.ListTrie=d
           //console.log(this.ListTrie)
         //})}
        
   
        
   
       
}
