import { Component} from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent{
  acno:any;
  pswd:any;

  constructor(){}
  ngOnInit():void {}

  //userdetails list
  userDetails:any={
    1000:{acno:1000,username:'Arun',password:1000,balance:2000},
    1001:{acno:1001,username:'Anand',password:1001,balance:5000},
    1002:{acno:1002,username:'Justin',password:1002,balance:7000},
    1003:{acno:1003,username:'Ajay',password:1003,balance:2600}
  }


  login(){
    var acno=this.acno;
    var pswd=this.pswd;
    var userDetails=this.userDetails;

    if(acno in userDetails){
      if(pswd==userDetails[acno]['password']){
        alert('Login successful');
      }else{
        alert('Password is incorrect');
      }
    }else{
      alert('User not found');
    }
  }

}
