import { Component} from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';
 
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent{
  acno:any;
  pswd:any;

  constructor(private router:Router,private ds:DataService){}
  ngOnInit():void {}

  login(){
    var acno=this.acno;
    var pswd=this.pswd;

    const result = this.ds.login(acno,pswd)

    if(result){
      alert('Login successful')
      this.router.navigateByUrl('dashboard')
    }else{
      alert('Login fails')
    }
  }


  acnoChange(event:any){
    this.acno=event.target.value;
  }
  pswdChange(event:any){
    this.pswd=event.target.value;
  }
}
