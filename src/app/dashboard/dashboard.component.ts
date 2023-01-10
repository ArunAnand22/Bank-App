import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ignoreElements } from 'rxjs';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {

  acno:any;
  pswd:any;
  amount:any;
  acno1:any;
  pswd1:any;
  amount1:any;
  user:any;
  constructor(private ds:DataService,private fb:FormBuilder){
    this.user=this.ds.currentUser;
  }
  ngOnInit():void{}
  // currentUser=this.ds.currentUser;

  //Model for deposit and withdraw
  depositForm=this.fb.group({
    acno:['',[Validators.required,Validators.pattern('[0-9]*')]],
    pswd:['',[Validators.required,Validators.pattern('[a-zA-Z0-9]*')]],
    amount:['',[Validators.required,Validators.pattern('[0-9]*')]]
  })
  withdrawForm=this.fb.group({
    acno1:['',[Validators.required,Validators.pattern('[0-9]*')]],
    pswd1:['',[Validators.required,Validators.pattern('[a-zA-Z0-9]*')]],
    amount1:['',[Validators.required,Validators.pattern('[0-9]*')]]
  })

  deposit(){
    var acno=this.depositForm.value.acno;
    var pswd=this.depositForm.value.pswd;
    var amount=this.depositForm.value.amount;

    const result=this.ds.deposit(acno,pswd,amount)
    
    if(this.depositForm.valid){
    if(result){
      alert(`${amount} is credited to ${acno} and balance is ${result}`);
    }else{
      alert('Invalid transaction');
      console.log(this.depositForm.get('acno1')?.errors);
      
    }
  }
  }

  withdraw(){
    var acno1=this.withdrawForm.value.acno1;  
    var pswd1=this.withdrawForm.value.pswd1;
    var amount1=this.withdrawForm.value.amount1;

    const result=this.ds.withdrawl(acno1,pswd1,amount1);

    if(this.withdrawForm.valid){
    if(result){
      alert(`${amount1} is debited from ${acno1} and remaining balance is ${result}`)
    }else{
      alert('Invalid transaction');
      console.log(this.withdrawForm.get('acno')?.errors);
      
    }
  }
  }

}
