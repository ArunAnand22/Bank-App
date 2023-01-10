import { Component} from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
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

  constructor(private router:Router,private ds:DataService,private fb:FormBuilder){}
  ngOnInit():void {}
    //Model for register
  loginForm=this.fb.group({//group
    acno:['',[Validators.required,Validators.pattern('[0-9]*')]],
    pswd:['',[Validators.required,Validators.pattern('[a-zA-Z0-9]*')]]
  })
  

  login(){
    var acno=this.loginForm.value.acno;
    var pswd=this.loginForm.value.pswd;

    const result = this.ds.login(acno,pswd)
    if(this.loginForm.valid){
    if(result){
      alert('Login successful')
      this.router.navigateByUrl('dashboard')
    }else{
      alert('Login fails')
      console.log(this.loginForm.get('acno')?.errors);
      
    }
  }
  }

 
  acnoChange(event:any){
    this.acno=event.target.value;
  }
  pswdChange(event:any){
    this.pswd=event.target.value;
  }
}
