import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  currentUser:any;
  currentAcno:any;

  userDetails:any={
    1000:{acno:1000,username:'Arun',password:1000,balance:2000,transaction:[]},
    1001:{acno:1001,username:'Anand',password:1001,balance:5000,transaction:[]},
    1002:{acno:1002,username:'Justin',password:1002,balance:7000,transaction:[]},
    1003:{acno:1003,username:'Ajay',password:1003,balance:2600,transaction:[]}
  }

  constructor() { }

//Register
  register(acno:any,username:any,password:any){
    var userDetails=this.userDetails

    if(acno in this.userDetails){
      return false;
    }else{
      userDetails[acno]={
        acno:acno,
        username:username,
        password:password,
        balance:0,
        transaction:[]
      }
      return true;
    }

  }

  //Login
  login(acno:any,pswd:any){
    if(acno in this.userDetails){
      if(pswd==this.userDetails[acno]['password']){
        this.currentUser=this.userDetails[acno]['username'];
        this.currentAcno=acno;
        return true;
      }else{
        alert('Invalid password')
        return false;
      }
    }else{
      alert('Invalid userdetails')
      return false;
    }

  }

  //Deposit
  deposit(acno:any,pswd:any,amt:any){
    var amount=parseInt(amt)
    // let userDetails=this.userDetails;
    if(acno in this.userDetails){
      if(pswd==this.userDetails[acno]['password']){
        this.userDetails[acno]['balance'] += amount;
        this.userDetails[acno]['transaction'].push({
          type:'Credit',
          amount
        })
        return this.userDetails[acno]['balance'];
      }else{
        alert('Invalid password')
        return false;
      }
    }else{
      alert('Invalid user Id');
      return false;
    }
  }

  //Withdrawl
  withdrawl(acno:any,pswd:any,amt:any){
    var amount=parseInt(amt)
    // let userDetails=this.userDetails;
    if(acno in this.userDetails){
      if(pswd==this.userDetails[acno]['password']){
        if(amount<this.userDetails[acno]['balance']){
          this.userDetails[acno]['balance'] -= amount;
          this.userDetails[acno]['transaction'].push({
            type:'Debit',
            amount
          })
        return this.userDetails[acno]['balance'];
        }else{
          alert('Insufficient amount')
          return false;
        }
      }else{
        alert('Invalid password')
        return false;
      }
    }else{
      alert('Invalid user Id');
      return false;
    }
  }

  getTransaction(acno:any){
    return this.userDetails[acno]['transaction']
  }

}
