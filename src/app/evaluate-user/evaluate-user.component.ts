import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EvaluateService } from '../Service/evaluate.service';
import { EvaluateModule } from '../../app/Model/evaluate/evaluate.module';
@Component({
  selector: 'app-evaluate-user',
  templateUrl: './evaluate-user.component.html',
  styleUrls: ['./evaluate-user.component.css']
})
export class EvaluateUserComponent implements OnInit {
  id :number;
  evaluate:EvaluateModule=new EvaluateModule();
  constructor(private EvaluateService : EvaluateService, private _router:Router) { }

  ngOnInit(): void {
  }
  add(){
    this.EvaluateService.AddTonAvisNOTE(this.id, this.evaluate).subscribe(()=>this._router.navigateByUrl("/home/wej"));
    }

}
